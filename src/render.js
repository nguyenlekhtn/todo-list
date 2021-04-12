import {Task, Project, ProjectList, pubsub} from './logic'



const projectListView = (() => {
    const projectContainerDOM = document.querySelector('.project-container')

    pubsub.subscribe("projectAdded", (data, topic) => {
        console.log('Project added')
        console.log({data})
        
        
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
    pubsub.subscribe('changeInfo', (data, info) => {
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
    document.querySelector('.edit-info-btn.cancel').addEventListener('click', e => {
        // console.log("hello")
        changeProjectInfo()
    })


    // submit project info
    document.querySelector(`.edit-project-button-container input[value="Submit"]`).addEventListener('click', e => {
        e.preventDefault()
        const name = document.getElementById('edit-input-name').value
        const description = document.getElementById('edit-input-description').value
        pubsub.publish('projectInfoSubmitted', {name, description})
        changeProjectInfo()
    })

    function changeProjectInfo() { // change project-info-container and its edit-container display
       
        [editContainer.style.display, infoContainer.style.display] = [window.getComputedStyle(infoContainer, null).display, window.getComputedStyle(editContainer, null).display]
    }

})()

const TaskListView = (() => {
    pubsub.subscribe('loadTaskList', (tasks, info) => {
        tasks.forEach(task => {
            const taskDOM = document.createElement('div')
            taskDOM.classList.add('task')
            // const taskDOM = document.createElement('div')
            // taskDOM.classList.add('task-area')
        })
    })
})()

const TaskView = (() => {
    
})()



const Controller = (() => {
    const myProjects = ProjectList()
    let newID = 1
    const defaultProject = Project(0, "default", "")

    myProjects.addProject(defaultProject)

    pubsub.subscribe("newInfoSubmitted", (data, info) => {
        const newProject = Project(newID++, data.name, data.description)
        myProjects.addProject(newProject)
    })
    
    pubsub.subscribe('projectSelected', (data, info) => {
        const projectSelected = myProjects.findProject(data)
        pubsub.publish('changeInfo', {name: projectSelected.name, description: projectSelected.description})
        pubsub.publish('loadTaskList', projectSelected.tasks)

    })
    

})()

export {projectListView, Controller, TaskListView}