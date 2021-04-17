import {ProjectList, pubsub} from './logic'
import {addDays, formatISO, parseISO, formatDistanceStrict} from 'date-fns'


import editSVG from './img/edit.svg'
import binSVG from './img/trash.svg'


const defaultTaskName = "Default Task"
const defaultDate = formatISO(addDays(new Date(), 1), {representation: 'date'})

const projectListView = (() => {
    const projectContainerDOM = document.querySelector('.project-container')
    const modal = document.querySelector('dialog')

    modal.addEventListener('transitionend', e => {
        modal.querySelector('input').focus()
    })

    pubsub.subscribe("projectAdded", (project, topic) => {
        const newProjectDOM = createProjectDOM(project)
        projectContainerDOM.appendChild(newProjectDOM)
    })

    pubsub.subscribe('changeProjectInList', (project, info) => {
        
        const id = project.getProjectInfo().id
        const projectDOM = getProjectDOMById(id)
        projectDOM.setAttribute('aria-current', 'true')
    })

    function getProjectDOMById(id) {
        return projectContainerDOM.querySelector(`div[data-projectid='${id}']`)
    }

    function selectProjectDOM(DOM) {
        
        removeActiveDOM()
        DOM.setAttribute('aria-current', 'true')
        pubsub.publish('projectSelected', DOM.dataset.projectid)
    }

    const createProjectDOM = (project) => {
        const newProjectDOM = document.createElement('div')
        newProjectDOM.classList.add("project", "project-link")
        newProjectDOM.setAttribute("data-projectID", project.getProjectInfo().id)
        newProjectDOM.textContent = project.getProjectInfo().name
        newProjectDOM.tabIndex = 0
        newProjectDOM.addEventListener('click', e => {
            if(e.target.getAttribute('aria-current') != 'true')
            {
                selectProjectDOM(newProjectDOM)
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

    document.forms['new-project-form'].addEventListener("submit", e => {
        e.preventDefault()
        const name = document.forms['new-project-form'].elements['new-project-name'].value;
        const description = document.forms['new-project-form'].elements['new-project-description'].value
        pubsub.publish("newInfoSubmitted", {name, description})
        modal.close()
    })


    
    

    // pubsub.subscribe('selectFirstOne', () => {
    //     const firstProjectDOM = projectContainerDOM.firstElementChild
    //     if(firstProjectDOM) {
    //     firstProjectDOM.setAttribute('aria-current', 'true')
    //     pubsub.publish('projectSelected', firstProjectDOM.dataset.projectid)
    //     }
    // })



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
    if(task.getTaskInfo().isCompleted == 1) {
        check.classList.add('checked')
        taskDOM.style.opacity = 0.5
    }
    check.addEventListener('click', e => {
        check.classList.toggle('checked')
        if(window.getComputedStyle(taskDOM, null).opacity == 1) {
            taskDOM.style.opacity = 0.5
        }
        else {
            taskDOM.style.opacity = 1
        }
        pubsub.publish('taskCompletedChanged', task)
    })
    
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
        console.log({task})
        pubsub.publishSync('taskDOMremoved', task)
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
        newTaskForm.querySelector('#edit-task-name').focus()
    }

    


    
})()



export {projectListView, TaskListView, pubsub}