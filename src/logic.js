import PubSub from 'PubSub';
const pubsub = new PubSub()
import {formatDistanceToNow} from 'date-fns'


const Task = (id, name, dueDate) => {    
    let isCompleted = false;
    // const priorityChange = function(newPriority) {
    //     priority = newPriority
    // }

    const getDistanceFromNow = () => {
        return formatDistanceToNow(dueDate, {addSuffix: true})
    }
    
    return {name, dueDate, getDistanceFromNow}
}

const Project = (id, name, description="") => {
    let taskList = []
    
    const addTask = function(task) {
        taskList.push(task)
        pubsub.publish("taskAdded", task)
    }   

    const removeitem = function(item) {
        const pos = items.indexOf(items)
        items.splice(pos, 1)
    }

    return {id, name, description, addTask}
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
