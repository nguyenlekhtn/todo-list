import PubSub from 'PubSub';
const pubsub = new PubSub()
const ls = require('local-storage');


const Task = (id, name, dueDate) => {    
    let isCompleted = false;
    
    const setTaskInfo = (newName, newDueDate) => {
        name = newName
        dueDate = newDueDate
        pubsub.publish('taskInfoChange', {name, dueDate})
    }

    const getTaskInfo = () => ({id, name, dueDate})

    
    
    return {setTaskInfo, getTaskInfo}
}

const Project = (id, name, description="") => {
    let list = []
    
    const addTask = function(task) {
        list.push(task)
        pubsub.publish("taskAdded", task)
        pubsub.publish('infoChanged', {})
        ls('currentTaskID', task.id + 1)
    }   

    const removeTask = function(item) {
        const pos = items.indexOf(items)
        items.splice(pos, 1)
    }

    const setProjectInfo = (newName, newDescription) => {
        name = newName
        description = newDescription
        pubsub('projectInfoChanged', {name, description})
    }

    const getProjectInfo = () => ({id, name, description, list})

    return {addTask, getProjectInfo, setProjectInfo} 
}

const ProjectList = (() => {
    let list = []
    

    const addProject = function(project) {
        list.push(project)
        pubsub.publish('projectAdded', project)
        pubsub.publish('infoChanged', {})
        ls('currentProjectID', project.id + 1)

    }

    const removeProject = function(project) {
        const pos = list.indexOf()
        pubsub.publish('infoChanged', {})
    }

    const findProject = (projectID) => { 
        return list.filter(project => project.getProjectInfo().id == projectID)[0]
    }

    const getList = () => {
        return [...list]
    }

    return {addProject, removeProject, findProject, getList, list}
})()

export {Task, Project, ProjectList, pubsub, ls}
