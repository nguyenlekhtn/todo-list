import PubSub from 'PubSub';

const Task = (title, description="", dueDate, priority, notes="") => {
    let isCompleted = false;
    const pubsub = new PubSub();
    const priorityChange = function(newPriority) {
        priority = newPriority
    }
    
    return {title, description, dueDate, priority, priorityChange}
}

const Project = (name, description="") => {
    let tasks = []
    
    const addItem = function(item) {
        items.push(item)
    }   

    const removeitem = function(item) {
        const pos = items.indexOf(items)
        items.splice(pos, 1)
    }

    return {name, description, addItem}
}

const ProjectList = () => {
    let projects = []
    const defaultProject = project("default")

    const addProject = function(project) {
        projects.push(project)
    }

    const removeProject = function(project) {
        const pos = project.indexOf()
    }

}
