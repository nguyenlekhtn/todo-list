import {Task, Project, ProjectList, pubsub} from './logic'
import {addDays, formatISO, parseISO, formatDistanceStrict} from 'date-fns'

import editSVG from './img/edit.svg'
import binSVG from './img/trash.svg'

const createProjectDOM = (project) => {
    const newProjectDOM = document.createElement('div')
    newProjectDOM.classList.add("project", "project-link")
    newProjectDOM.setAttribute("data-projectID", project.getProjectInfo().id)
    newProjectDOM.textContent = project.getProjectInfo().name

    if(!projectContainerDOM.hasChildNodes()) {
        newProjectDOM.classList.add('active')
    }

    return {newProjectDOM}
}

const projectListView = (() => {
    const projectContainerDOM = document.querySelector('.project-container')

    pubsub.subscribe("projectAdded", (project, topic) => {
        console.log(createProjectDOM(project))
        const newProjectDOM = createProjectDOM(project)
        projectContainerDOM.appendChild(newProjectDOM)
    })

    const createProjectDOM = (project) => {
        const newProjectDOM = document.createElement('div')
        newProjectDOM.classList.add("project", "project-link")
        newProjectDOM.setAttribute("data-projectID", project.getProjectInfo().id)
        newProjectDOM.textContent = project.getProjectInfo().name

        if(!projectContainerDOM.hasChildNodes()) {
            newProjectDOM.classList.add('active')
        }

        return newProjectDOM
    }
     

    pubsub.subscribe('projectInfoChanged', (project, topic) => {
        const id = project.getProjectInfo().id
        const changedProjectDOM = document.querySelector(`div[data-projectid='${id}']`)
        changedProjectDOM.textContent = project.getProjectInfo().name
    })

    document.querySelector('.popup-submit-btn').addEventListener("click", e => {
        // e.preventDefault()
        const name = document.querySelector('#new-project-name').value;
        const description = document.querySelector('#new-project-description').value
        pubsub.publish("newInfoSubmitted", {name, description})
        // return false;
    })
    
    projectContainerDOM.addEventListener('click', e => {
        if(!e.target.classList.contains('active'))
        {
            removeActiveDOM()
            e.target.classList.add('active')
            console.log(e.target.dataset.projectid)
            pubsub.publish('projectSelected', e.target.dataset.projectid)
        }
        
    })

    function removeActiveDOM() {
        [...projectContainerDOM.children].forEach(node => {
            node.classList.remove('active')
        })
    }
    

    return {}

})()

const projectView = (() => {
    const projectNameDOM = document.querySelector('.project-info-name')
    const projectDescDOM = document.querySelector('.project-info-description')
    const infoContainer = document.querySelector('.project-info-container')
    const editContainer = document.querySelector(".edit-project-info-container")

    pubsub.subscribe('changeProject', (project, info) => {
        projectNameDOM.textContent = project.getProjectInfo().name
        projectDescDOM.textContent = project.getProjectInfo().description
    })

    // edit project info
    document.querySelector('.project-icon-container').addEventListener('click', e => {
        document.getElementById('edit-input-name').value = projectNameDOM.textContent
        document.getElementById('edit-input-description').value = projectDescDOM.textContent
        toggleProjectEditDisplay()
    })


    // cancel
    document.getElementById('cancel-project-info-btn').addEventListener('click', e => {
        toggleProjectEditDisplay()
    })


    // submit project info
    document.getElementById('submit-project-info-btn').addEventListener('click', e => {
        e.preventDefault()
        const name = document.getElementById('edit-input-name').value
        const description = document.getElementById('edit-input-description').value
        projectNameDOM.textContent = name
        projectDescDOM.textContent = description

        pubsub.publish('projectInfoSubmitted', {title: name, description})
        toggleProjectEditDisplay()
    })

    // change project-info-container and its edit-container display
    function toggleProjectEditDisplay() { 
       
        [editContainer.style.display, infoContainer.style.display] = [window.getComputedStyle(infoContainer, null).display, window.getComputedStyle(editContainer, null).display]
    }

})()

const TaskDOM = (task) => {
    const taskDOM = document.createElement('div')
    taskDOM.classList.add('task')
    const taskContentDOM = document.createElement('div')
    taskContentDOM.classList.add('task-content')
    taskContentDOM.setAttribute('data-taskid', task.getTaskInfo().id)
    
    const leftArea = document.createElement('div')
    leftArea.classList.add('task-area')
    
    const check = document.createElement('div')
    check.classList.add('check', 'project-link')
    
    const taskName = document.createElement('div')
    taskName.classList.add('task-name','project-link')
    taskName.textContent = task.getTaskInfo().name
    leftArea.appendChild(check)
    leftArea.appendChild(taskName)
    
    const rightArea = document.createElement('div')
    rightArea.classList.add('task-area')
    
    const remainTime = document.createElement('div')
    remainTime.classList.add('task-duedate')
    console.log(task.dueDate)
    remainTime.textContent = getDistanceFromNow(task.getTaskInfo().dueDate)
    
    
    
    const editTaskDOM = document.createElement('div')
    editTaskDOM.classList.add('edit-task-content')
    
    const leftEdit = document.createElement('div')
    leftEdit.classList.add('task-area')
    
    const editTaskName = document.createElement('input')
    editTaskName.id = 'edit-task-name'
    editTaskName.type = 'text'
    editTaskName.value = task.getTaskInfo().name
    editTaskName.classList.add("edit-task-input")
    
    const editTaskDueDate = document.createElement('input')
    editTaskDueDate.id = 'edit-task-duedate'
    editTaskDueDate.type = 'date'
    editTaskDueDate.value = task.getTaskInfo().dueDate
    editTaskDueDate.classList.add("edit-task-input")
    leftEdit.appendChild(editTaskName)
    leftEdit.appendChild(editTaskDueDate)

    const rightEdit = document.createElement('div')
    rightEdit.classList.add('task-area')
    
    const submitButton = document.createElement('input')
    submitButton.type = 'button'
    submitButton.value = 'Submit'
    submitButton.classList.add("edit-task-btn", "submit", "project-link")
    submitButton.addEventListener('click', e => {
        const newTaskTitle = editTaskName.value;
        const newTaskDueDate = editTaskDueDate.value
        pubsub.publish('taskInfoSubmitted', {task, title: newTaskTitle, dueDate: newTaskDueDate})
        taskName.textContent = newTaskTitle
        remainTime.textContent = getDistanceFromNow(newTaskDueDate)
        _changeTaskDisplay() 
    })

    const cancelButton = document.createElement('input')
    cancelButton.type = 'button'
    cancelButton.value = 'Cancel'
    cancelButton.classList.add("edit-task-btn", "cancel", "project-link")
    console.log({cancelButton})
    cancelButton.addEventListener('click', e => {
        _changeTaskDisplay()    
    })
    console.log({onlick: cancelButton.onlick})
    rightEdit.appendChild(submitButton)
    rightEdit.appendChild(cancelButton)
    editTaskDOM.appendChild(leftEdit)
    editTaskDOM.appendChild(rightEdit)

    const editIcon = new Image()
    editIcon.src = editSVG
    editIcon.classList.add('task-icon','edit-icon')
    editIcon.onclick = e => {
        _changeTaskDisplay()
    }
    
    const binIcon = new Image()
    binIcon.src = binSVG
    binIcon.classList.add('task-icon','bin-icon')
    binIcon.addEventListener('click', e => {
        taskDOM.remove()
    })

    rightArea.appendChild(remainTime)
    rightArea.appendChild(editIcon)
    rightArea.appendChild(binIcon)
    taskContentDOM.appendChild(leftArea)
    taskContentDOM.appendChild(rightArea)
    taskDOM.appendChild(taskContentDOM)
    taskDOM.appendChild(editTaskDOM)

    function _changeTaskDisplay() { 
       
        [editTaskDOM.style.display, taskContentDOM.style.display] = [window.getComputedStyle(taskContentDOM, null).display, window.getComputedStyle(editTaskDOM, null).display]
    }

    function getDistanceFromNow(dateString){
        const baseDate = new Date()
        return formatDistanceStrict(parseISO(dateString), baseDate, {
            addSuffix: true,
            unit: 'day' })
    }

    return taskDOM
}



const TaskListView = (() => {
    const taskListDOM = document.querySelector("#container > div.main-panel > div.tasks-container")
    const addTaskContainerDOM = document.querySelector('.add-task-container')

    const taskFormDOM = () => {
        const editTaskContainerDOM = document.createElement('div')
        editTaskContainerDOM.classList.add('task')
        editTaskContainerDOM.id = 'edit-task-form'
        const editTaskDOM = document.createElement('div')
        editTaskDOM.classList.add('new-task-form')
        
        const leftEdit = document.createElement('div')
        leftEdit.classList.add('task-area')
        
        const editTaskName = document.createElement('input')
        editTaskName.id = 'edit-task-name'
        editTaskName.type = 'text'
        editTaskName.value = Controller.defaultTaskName
        editTaskName.classList.add("edit-task-input")
        
        const editTaskDueDate = document.createElement('input')
        editTaskDueDate.id = 'edit-task-duedate'
        editTaskDueDate.type = 'date'
        editTaskDueDate.value = Controller.defaultDate
        editTaskDueDate.classList.add("edit-task-input")
        leftEdit.appendChild(editTaskName)
        leftEdit.appendChild(editTaskDueDate)
    
        const rightEdit = document.createElement('div')
        rightEdit.classList.add('task-area')
        
        const submitButton = document.createElement('input')
        submitButton.type = 'button'
        submitButton.value = 'Submit'
        submitButton.classList.add("edit-task-btn", "submit", "project-link")
        submitButton.addEventListener('click', e => {
            const title = editTaskName.value
            const dueDate = editTaskDueDate.value
            pubsub.publish('newTaskSubmitted', {title, dueDate})
            editTaskContainerDOM.remove()
            addTaskContainerDOM.style.display = 'flex'
            
        })
    
        const cancelButton = document.createElement('input')
        cancelButton.type = 'button'
        cancelButton.value = 'Cancel'
        cancelButton.classList.add("edit-task-btn", "cancel", "project-link")
        console.log({cancelButton})
        cancelButton.addEventListener('click', e => {
            editTaskContainerDOM.remove()
            addTaskContainerDOM.style.display = 'flex'
        })
        rightEdit.appendChild(submitButton)
        rightEdit.appendChild(cancelButton)
        editTaskDOM.appendChild(leftEdit)
        editTaskDOM.appendChild(rightEdit)
        editTaskContainerDOM.appendChild(editTaskDOM)
    
        return editTaskContainerDOM
    }

    pubsub.subscribe('loadTaskList', (taskList, info) => {
        taskList.forEach(createTaskDOM)
    })

    pubsub.subscribe('taskAdded', (task, info) => {
        createTaskDOM(task)
    })

    function createTaskDOM(task) {
        const taskDOM = TaskDOM(task)
        taskListDOM.appendChild(taskDOM)
    }

    addTaskContainerDOM.addEventListener('click', makeNewTaskForm)

    function makeNewTaskForm() {
        const newTaskForm = taskFormDOM()
        taskListDOM.appendChild(newTaskForm)
        addTaskContainerDOM.style.display = 'none'
    }

    


    
})()

const Controller = (() => {
    // if(!localStorage.getItem('projectList'))
    // {
    //     populateStorage()
    // }
    // else {
    //     const myProjectList = localStorage.getItem('projectList')
    // }

    // function populateStorage() {
        localStorage.setItem('projectList', JSON.stringify(ProjectList))
        let newProjectID = 1
        let newTaskID = 1
        localStorage.setItem('currentProjectID', newProjectID)
        localStorage.setItem('currentTaskID', newTaskID)
        
        const defaultProjectName = "Default Project"
        const defaultProject = Project(0, defaultProjectName, "")
        ProjectList.addProject(defaultProject)
        let currentProject = defaultProject
        const defaultTaskName = "Default Task"
        const defaultDate = formatISO(addDays(new Date(), 1), {representation: 'date'})
        const defaultTask = Task(0, defaultTaskName, defaultDate)
        defaultProject.addTask(defaultTask)
    // }
    

    

    pubsub.subscribe("newInfoSubmitted", (data, info) => {
        const newProject = Project(newProjectID++, data.name, data.description)
        ProjectList.addProject(newProject)
    })
    
    pubsub.subscribe('projectSelected', (data, info) => {
        const projectSelected = ProjectList.findProject(data)
        console.log({projectSelected})
        currentProject = projectSelected
        pubsub.publish('changeProject', projectSelected)
        pubsub.publish('loadTaskList', projectSelected.getProjectInfo().list)

    })

    pubsub.subscribe('projectInfoSubmitted', ({title, description},info) => {
        currentProject.name = title
        currentProject.description = description
        pubsub.publish('infoChanged', {})
        pubsub.publish('projectInfoChanged', currentProject)
    })
    

    pubsub.subscribe('taskInfoSubmitted', ({task, title, dueDate}, info) => {
        task.name = title
        task.dueDate = dueDate
        pubsub.publish('infoChanged', {})
    })

    pubsub.subscribe('newTaskSubmitted', ({title, dueDate}, topic) => {
        const newTask = Task(newTaskID++, title, dueDate)
        currentProject.addTask(newTask)
    })

    pubsub.subscribe('infoChanged', (data, topic) => {
        localStorage.setItem('projectList',  JSON.stringify(ProjectList))
    })

    
    return {defaultTaskName, defaultDate}
})()

export {projectListView, Controller, TaskListView}