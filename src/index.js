// import { IS_FINISHED } from './event-types.js'
import PubSub from 'PubSub';

const items = (title, description="", dueDate, priority, notes="") => {
    let isCompleted = false;
    const pubsub = new PubSub();
    const priorityChange = function(newPriority) {
        priority = newPriority
    }
    
    return {title, description, dueDate, priority, priorityChange}
}

const project = (name) => {
    let items = []
    
    const addItem = function(item) {
        items.push(item)
    }   

    const removeitem = function(item) {
        const pos = items.indexOf(items)
        items.splice(pos, 1)
    }
}

const todoList = () => {
    let projects = []
    const defaultProject = project("default")

    const addProject = function(project) {
        projects.push(project)
    }

    const removeProject = function(project) {
        const pos = project.indexOf()
    }

}





