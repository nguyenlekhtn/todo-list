import {Task, Project, ProjectList, pubsub, ls} from './logic'
import {addDays, formatISO, parseISO, formatDistanceStrict} from 'date-fns'

import editSVG from './img/edit.svg'
import binSVG from './img/trash.svg'


const defaultTaskName = "Default Task"
const defaultDate = formatISO(addDays(new Date(), 1), {representation: 'date'})

const projectListView = (() => {
    const projectContainerDOM = document.querySelector('.project-container')

    pubsub.subscribe("projectAdded", (project, topic) => {
        const newProjectDOM = createProjectDOM(project)
        projectContainerDOM.appendChild(newProjectDOM)
    })

    const createProjectDOM = (project) => {
        const newProjectDOM = document.createElement('div')
        newProjectDOM.classList.add("project", "project-link")
        newProjectDOM.setAttribute("data-projectID", project.getProjectInfo().id)
        newProjectDOM.textContent = project.getProjectInfo().name
        newProjectDOM.tabIndex = 0
        newProjectDOM.addEventListener('click', e => {
            if(e.target.getAttribute('aria-current') != 'true')
            {
                removeActiveDOM()
                // e.target.classList.add('active')
                newProjectDOM.setAttribute('aria-current', 'true')
                pubsub.publish('projectSelected', e.target.dataset.projectid)
            }
            
        })
        newProjectDOM.addEventListener('keydown', function(e) {
            const code = e.code

            switch (code) {
                case 'Enter':
                case 'Backspace':
                    e.preventDefault()
                    e.target.click()

                default:
                    break;
            }
        })

        return newProjectDOM
    }
    
    pubsub.subscribe('removeProjectDOM', (project, info) => {
        const id = project.getProjectInfo().id
        ProjectList.removeProject(project)
        removeProjectDOM(id)
    })

    function removeProjectDOM(id) {
        const projectsDOM = [...projectContainerDOM.querySelectorAll('div')]
        const targetDOM = projectsDOM.filter(projectDOM => {
            return projectDOM.dataset.projectid == id
        })[0]
        
        projectContainerDOM.removeChild(targetDOM)
    }
    

    pubsub.subscribe('projectInfoChanged', ({id, name, description}, topic) => {
        const changedProjectDOM = document.querySelector(`div[data-projectid='${id}']`)
        changedProjectDOM.textContent = name
    })

    document.querySelector('.popup-submit-btn').addEventListener("click", e => {
        // e.preventDefault()
        const name = document.querySelector('#new-project-name').value;
        const description = document.querySelector('#new-project-description').value
        pubsub.publish("newInfoSubmitted", {name, description})
        // return false;
    })


    
    

    pubsub.subscribe('selectFirstOne', () => {
        const firstProjectDOM = projectContainerDOM.firstElementChild
        if(firstProjectDOM) {
        firstProjectDOM.setAttribute('aria-current', 'true')
        pubsub.publish('projectSelected', firstProjectDOM.dataset.projectid)
        }
    })



    function removeActiveDOM() {
        [...projectContainerDOM.children].forEach(node => {
            node.removeAttribute('aria-current')
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
    document.querySelector('.project-edit-icon').addEventListener('click', e => {
        document.getElementById('edit-input-name').value = projectNameDOM.textContent
        document.getElementById('edit-input-description').value = projectDescDOM.textContent
        toggleProjectEditDisplay()
    })

    // delete project
    document.querySelector('.project-trash-icon').addEventListener('click', e => {
        pubsub.publish('removeCurrentProject')
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
    remainTime.textContent = getDistanceFromNow(task.getTaskInfo().dueDate)
    
    
    
    const editTaskDOM = document.createElement('div')
    editTaskDOM.classList.add('edit-task-content')
    
    const leftEdit = document.createElement('div')
    leftEdit.classList.add('task-area')
    
    const editTaskName = document.createElement('input')
    editTaskName.type = 'text'
    editTaskName.value = task.getTaskInfo().name
    editTaskName.classList.add("edit-task-input")
    
    const editTaskDueDate = document.createElement('input')
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
    cancelButton.addEventListener('click', e => {
        _changeTaskDisplay()    
    })
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
        editTaskName.value = defaultTaskName
        editTaskName.classList.add("edit-task-input")
        
        const editTaskDueDate = document.createElement('input')
        editTaskDueDate.id = 'edit-task-duedate'
        editTaskDueDate.type = 'date'
        editTaskDueDate.value = defaultDate
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
        taskListDOM.textContent = ""
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
    let currentProject;
    let newProjectID
    let newTaskID

    if(!ls.get('projectList'))
    {
        populateStorage()
    }
    else{
        setItems()
    }

    function populateStorage() {
        const defaultProjectName = "Default Project"
        const defaultProjectID = 0
        const defaultProject = Project(defaultProjectID, defaultProjectName, "")
        ProjectList.addProject(defaultProject)
        currentProject = defaultProject
        const defaultTaskID = 0
        const defaultTask = Task(0, defaultTaskName, defaultDate)

        defaultProject.addTask(defaultTask)


        newProjectID = defaultProjectID + 1;
        newTaskID = defaultTaskID + 1
    }

    function setItems() {
        const plainProjectArr = ls('projectList')
        const richProjectArr = parseProjectList(plainProjectArr)
        
        const lastProjectID = ls('currentProjectID')
        const lastTaskID = ls('currentTaskID')

        richProjectArr.forEach(project => {
            ProjectList.addProject(project)

        })
        
        if(ProjectList.getList().length != 0) {
            loadFirstProjectInView()
        }

        

        newProjectID = lastProjectID + 1
        newTaskID = lastTaskID + 1
    }
    
    function loadFirstProjectInView() {
        pubsub.publishSync('selectFirstOne')
        currentProject = ProjectList.getList()[0]
        loadProject(currentProject.getProjectInfo().id)
    }

    pubsub.subscribe("newInfoSubmitted", (data, info) => {
        const newProject = Project(newProjectID++, data.name, data.description)
        ProjectList.addProject(newProject)
    })
    
    pubsub.subscribe('projectSelected', (id, info) => {
        loadProject(id)
    })

    function loadProject(id) {
        const projectSelected = ProjectList.findProject(id)
        currentProject = projectSelected
        if(!projectSelected) {
            console.log({projectSelected})
        }
        pubsub.publish('changeProject', projectSelected)
        pubsub.publish('loadTaskList', projectSelected.getProjectInfo().list)
    }

    pubsub.subscribe('projectInfoSubmitted', ({title, description},info) => {
        currentProject.setProjectInfo(title, description)
        pubsub.publish('infoChanged', {})
        
    })
    

    pubsub.subscribe('taskInfoSubmitted', ({task, title, dueDate}, info) => {
        task.setTaskInfo(title, dueDate)
        pubsub.publish('infoChanged', {})
    })

    pubsub.subscribe('newTaskSubmitted', ({title, dueDate}, topic) => {
        const newTask = Task(newTaskID++, title, dueDate)
        currentProject.addTask(newTask)
    })

    pubsub.subscribe('infoChanged', (data, topic) => {
        ls('projectList', ProjectList.getList())
    })

    pubsub.subscribe('removeCurrentProject', () => {
        const current = currentProject
        pubsub.publishSync('removeProjectDOM', current)
        loadFirstProjectInView()
    })

    function parseProjectList(projectArr) {
        for(let i = 0; i < projectArr.length; i++) {
            const plainProject = projectArr[i]
            const richProject = Project(plainProject.id, plainProject.name, plainProject.description)
            const taskArr = plainProject.list
            for(let i = 0; i< taskArr.length; i++) {
                const plainTask = taskArr[i]
                const richTask = Task(plainTask.id, plainTask.name, plainTask.dueDate)
                taskArr[i] = richTask
            }
            richProject.setList(taskArr)
            projectArr[i] = richProject
        }

        return projectArr
    }
    
    return {}
})()

export {projectListView, Controller, TaskListView}