import PubSub from 'PubSub';
const pubsub = new PubSub()
import {formatDistanceToNow} from 'date-fns'


const Task = (id, title, description="", dueDate, priority, notes="") => {    
    let isCompleted = false;
    const priorityChange = function(newPriority) {
        priority = newPriority
    }

    const getDistanceFromNow = () => {
        return formatDistanceToNow(dueDate, {addSuffix: true})
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

    const findProject = (projectID) => { 
        return projects.filter(project => project.id == projectID)[0]
    }

    return {addProject, removeProject, findProject}
}

export {Task, Project, ProjectList, pubsub}
