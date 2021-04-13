import {Task, Project, ProjectList, pubsub} from './logic'
import {addDays, format, formatISO, parseISO, formatDistanceStrict} from 'date-fns'

import editSVG from './img/edit.svg'
import binSVG from './img/trash.svg'

const projectListView = (() => {
    const projectContainerDOM = document.querySelector('.project-container')

    pubsub.subscribe("projectAdded", (data, topic) => {
        const newProjectDOM = document.createElement('div')
        newProjectDOM.classList.add("project", "project-link")
        newProjectDOM.setAttribute("data-projectID", data.id)
        newProjectDOM.textContent = data.name
        newProjectDOM.onclick = (e) => {

        }
        console.log(projectContainerDOM.hasChildNodes())
        if(!projectContainerDOM.hasChildNodes()) {
            newProjectDOM.classList.add('active')
        }
        projectContainerDOM.appendChild(newProjectDOM)
    })

    pubsub.subscribe('projectInfoChanged', ({id, title}, topic) => {
        const changedProjectDOM = document.querySelector(`div[data-projectid='${id}']`)
        changedProjectDOM.textContent = title
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

    pubsub.subscribe('changeProject', (data, info) => {
        projectNameDOM.textContent = data.name
        projectDescDOM.textContent = data.description
    })

    // edit project info
    document.querySelector('.project-icon-container').addEventListener('click', e => {
        document.getElementById('edit-input-name').value = projectNameDOM.textContent
        document.getElementById('edit-input-description').value = projectDescDOM.textContent
        changeProjectInfo()
    })


    // cancel
    document.getElementById('cancel-project-info-btn').addEventListener('click', e => {
        changeProjectInfo()
    })


    // submit project info
    document.getElementById('submit-project-info-btn').addEventListener('click', e => {
        e.preventDefault()
        const name = document.getElementById('edit-input-name').value
        const description = document.getElementById('edit-input-description').value
        projectNameDOM.textContent = name
        projectDescDOM.textContent = description

        pubsub.publish('projectInfoSubmitted', {title: name, description})
        changeProjectInfo()
    })

    // change project-info-container and its edit-container display
    function changeProjectInfo() { 
       
        [editContainer.style.display, infoContainer.style.display] = [window.getComputedStyle(infoContainer, null).display, window.getComputedStyle(editContainer, null).display]
    }

})()

const TaskDOM = (task) => {
    const taskDOM = document.createElement('div')
    taskDOM.classList.add('task')
    const taskContentDOM = document.createElement('div')
    taskContentDOM.classList.add('task-content')
    taskContentDOM.setAttribute('data-taskid', task.id)
    
    const leftArea = document.createElement('div')
    leftArea.classList.add('task-area')
    
    const check = document.createElement('div')
    check.classList.add('check', 'project-link')
    
    const taskName = document.createElement('div')
    taskName.classList.add('task-name','project-link')
    taskName.textContent = task.name
    leftArea.appendChild(check)
    leftArea.appendChild(taskName)
    
    const rightArea = document.createElement('div')
    rightArea.classList.add('task-area')
    
    const remainTime = document.createElement('div')
    remainTime.classList.add('task-duedate')
    console.log(task.dueDate)
    remainTime.textContent = getDistanceFromNow(task.dueDate)
    
    
    
    const editTaskDOM = document.createElement('div')
    editTaskDOM.classList.add('edit-task-content')
    
    const leftEdit = document.createElement('div')
    leftEdit.classList.add('task-area')
    
    const editTaskName = document.createElement('input')
    editTaskName.id = 'edit-task-name'
    editTaskName.type = 'text'
    editTaskName.value = task.name
    editTaskName.classList.add("edit-task-input")
    
    const editTaskDueDate = document.createElement('input')
    editTaskDueDate.id = 'edit-task-duedate'
    editTaskDueDate.type = 'date'
    editTaskDueDate.value = task.dueDate
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
        pubsub.publish('taskFormRemoved', {})
        
    })

    const cancelButton = document.createElement('input')
    cancelButton.type = 'button'
    cancelButton.value = 'Cancel'
    cancelButton.classList.add("edit-task-btn", "cancel", "project-link")
    console.log({cancelButton})
    cancelButton.addEventListener('click', e => {
        editTaskContainerDOM.remove()
        pubsub.publish('taskFormRemoved', {})
    })
    rightEdit.appendChild(submitButton)
    rightEdit.appendChild(cancelButton)
    editTaskDOM.appendChild(leftEdit)
    editTaskDOM.appendChild(rightEdit)
    editTaskContainerDOM.appendChild(editTaskDOM)

    return editTaskContainerDOM
}

const TaskListView = (() => {
    const taskListDOM = document.querySelector("#container > div.main-panel > div.tasks-container")
    const addTaskContainerDOM = document.querySelector('.add-task-container')

    pubsub.subscribe('loadTaskList', (taskList, info) => {
        taskList.forEach(createTaskDOM)
    })

    pubsub.subscribe('taskAdded', (task, info) => {
        createTaskDOM(task)
    })

    function createTaskDOM(task) {
        const taskDOM = TaskDOM(task)
        console.log(taskDOM)
        taskListDOM.appendChild(taskDOM)
    }

    addTaskContainerDOM.addEventListener('click', makeNewTaskForm)

    function makeNewTaskForm() {
        const newTaskForm = taskFormDOM()
        taskListDOM.appendChild(newTaskForm)
        addTaskContainerDOM.style.display = 'none'
    }

    pubsub.subscribe('taskFormRemoved', (data, topic) => {
        addTaskContainerDOM.style.display = 'flex'
    }) 
    


    
})()

// const TaskView = (() => {
    
// })()



const Controller = (() => {
    const myProjects = ProjectList()
    let newProjectID = 1
    let newTaskID = 1
    const defaultProject = Project(0, "Default Project", "")
    let currentProject = defaultProject

    myProjects.addProject(defaultProject)

    pubsub.subscribe("newInfoSubmitted", (data, info) => {
        const newProject = Project(newProjectID++, data.name, data.description)
        myProjects.addProject(newProject)
    })
    
    pubsub.subscribe('projectSelected', (data, info) => {
        const projectSelected = myProjects.findProject(data)
        currentProject = projectSelected
        pubsub.publish('changeProject', {name: projectSelected.name, description: projectSelected.description})
        pubsub.publish('loadTaskList', projectSelected.taskList)

    })

    pubsub.subscribe('projectInfoSubmitted', ({title, description},info) => {
        currentProject.name = title
        currentProject.description = description
        pubsub.publish('projectInfoChanged', {id: currentProject.id, title})
    })
    const defaultTaskName = "Default Task"
    const defaultDate = formatISO(addDays(new Date(), 1), {representation: 'date'})
    console.log({defaultDate})
    const defaultTask = Task(0, defaultTaskName, defaultDate)
    defaultProject.addTask(defaultTask)

    pubsub.subscribe('taskInfoSubmitted', ({task, title, dueDate}, info) => {
        task.name = title
        task.dueDate = dueDate
    })

    pubsub.subscribe('newTaskSubmitted', ({title, dueDate}, topic) => {
        const newTask = Task(newTaskID++, title, dueDate)
        currentProject.addTask(newTask)
    })

    
    return {defaultTaskName, defaultDate}
})()

export {projectListView, Controller, TaskListView}