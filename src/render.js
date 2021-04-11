import {Task, Project, ProjectList, pubsub} from './logic'



const projectsView = (() => {
    pubsub.subscribe("projectAdded", (data, topic) => {
        console.log('Project added')
        console.log({data})
        const projectContainerDOM = document.querySelector('.project-container')
        if(!projectContainerDOM) {
            console.log({projectContainerDOM})
        }
        
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

    document.getElementById("new-project-form").addEventListener("submit", e => {
        e.preventDefault()
        const name = e.target.elements["name"].value;
        const description = e.target.elements["description"].value
        pubsub.publish("newInfoSubmitted", {name, description})
    })
    

    const test = (() => {
    })

    return {test}

})()

const projectController = (() => {
    const myProjects = ProjectList()
    let newID = 1
    const defaultProject = Project(0, "default", "")

    myProjects.addProject(defaultProject)

    pubsub.subscribe("newInfoSubmitted", (data, info) => {
        const newProject = Project(newID++, data.name, data.description)
        myProjects.addProject(newProject)
    })
    
    // document.querySelector('.project-container').addEventListener('click', e => {
    //     pubsub.subscribe("projectSelected", e.target.)
    // })

})()

export {projectsView, projectController}