import PubSub from 'PubSub';
const pubsub = new PubSub()

const Task = (id, title, description="", dueDate, priority, notes="") => {    
    let isCompleted = false;
    const priorityChange = function(newPriority) {
        priority = newPriority
    }
    
    return {title, description, dueDate, priority, priorityChange}
}

const Project = (id, name, description="") => {
    let tasks = []
    
    const addItem = function(item) {
        items.push(item)
    }   

    const removeitem = function(item) {
        const pos = items.indexOf(items)
        items.splice(pos, 1)
    }

    return {id, name, description, addItem}
}

const ProjectList = () => {
    let projects = []
    

    const addProject = function(project) {
        projects.push(project)
        pubsub.publish('projectAdded', project)
    }

    const removeProject = function(project) {
        const pos = project.indexOf()
    }
    return {addProject, removeProject}
}

export {Task, Project, ProjectList, pubsub}
