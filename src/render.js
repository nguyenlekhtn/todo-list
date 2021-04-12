import {Task, Project, ProjectList, pubsub} from './logic'
import {addDays, format} from 'date-fns'

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
    document.querySelector('.project-edit-icon').addEventListener('click', e => {
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

const TaskListView = (() => {
    const taskListDOM = document.querySelector("#container > div.main-panel > div.tasks-container")
    

    pubsub.subscribe('loadTaskList', (taskList, info) => {
        taskList.forEach(createTaskDOM)
    })

    pubsub.subscribe('taskAdded', (task, info) => {
        createTaskDOM(task)
    })

    function createTaskDOM(task) {
        const taskDOM = document.createElement('div')
            taskDOM.classList.add('task')
            const taskContentDOM = document.createElement('div')
            taskContentDOM.classList.add('task-content')
            
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
            remainTime.textContent = task.getDistanceFromNow()
            
            const editIcon = new Image()
            editIcon.src = editSVG
            editIcon.classList.add('task-icon','edit-icon')
            
            const binIcon = new Image()
            binIcon.src = binSVG
            binIcon.classList.add('task-icon','bin-icon')
            rightArea.appendChild(remainTime)
            rightArea.appendChild(editIcon)
            rightArea.appendChild(binIcon)
            taskContentDOM.appendChild(leftArea)
            taskContentDOM.appendChild(rightArea)
            
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
            submitButton.classList.add("edit-project-btn", "submit", "project-link")

            const cancelButton = document.createElement('input')
            cancelButton.type = 'button'
            cancelButton.value = 'Cancel'
            cancelButton.classList.add("edit-project-btn", "submit", "project-link")
            rightEdit.appendChild(submitButton)
            rightEdit.appendChild(cancelButton)
            editTaskDOM.appendChild(leftEdit)
            editTaskDOM.appendChild(rightEdit)
            taskDOM.appendChild(taskContentDOM)
            taskDOM.appendChild(editTaskDOM)
            taskListDOM.appendChild(taskDOM)
    }

})()

const TaskView = (() => {
    
})()



const Controller = (() => {
    const myProjects = ProjectList()
    let newProjectID = 1
    let newTaskID = 1
    const defaultProject = Project(0, "Default Project", "")
    let currentProject = defaultProject

    myProjects.addProject(defaultProject)

    pubsub.subscribe("newInfoSubmitted", (data, info) => {
        const newProject = Project(newID++, data.name, data.description)
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

    const defaultDate = addDays(new Date(), 1)
    console.log({defaultDate})
    const defaultTask = Task(0, "Default Task", defaultDate)
    defaultProject.addTask(defaultTask)
    

})()

export {projectListView, Controller, TaskListView}