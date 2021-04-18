import PubSub from 'PubSub';
// const ls = require('local-storage');
const pubsub = new PubSub()

const Task = (id, name, dueDate, isCompleted = 0) => {    
    
    const setTaskInfo = (newName, newDueDate) => {
        name = newName
        dueDate = newDueDate
        pubsub.publish('infoChanged')
        // pubsub.publish('taskInfoChange', {name, dueDate})
    }

    const toggleCompleted = () => {
        isCompleted = (isCompleted == 0) ? 1 : 0
        pubsub.publishSync('infoChanged')
    }

    const getTaskInfo = () => ({id, name, dueDate, isCompleted})

    function toJSON() {
        return {id, name, dueDate, isCompleted}
    }
    
    return {setTaskInfo, getTaskInfo, toJSON, toggleCompleted}
}

const Project = (id, name, description="") => {
    const ls = require('local-storage');
    let list = []

    const setList = (taskArr) => {
        taskArr.forEach(task => {
            list.push(task)
        })
    }
    
    const addTask = function(task) {
        list.push(task)
        pubsub.publish("taskAdded", task)
        pubsub.publish('infoChanged')
        ls('currentTaskID', task.id)
    }   

    const removeTask = function(item) {
        const pos = list.indexOf(item)
        list.splice(pos, 1)
        pubsub.publish('infoChanged')
    }

    const setProjectInfo = (newName, newDescription) => {
        name = newName
        description = newDescription
        pubsub.publish('projectInfoChanged', {id, name, description})
        pubsub.publish('infoChanged')
    }

    const getProjectInfo = () => ({id, name, description, list})

    function toJSON() {
        return {id, name, description, list}
    }

    return {addTask, getProjectInfo, setProjectInfo, toJSON, setList, removeTask} 
}

const ProjectList = (() => {
    const ls = require('local-storage');
    let list = []

    const setList = (projectArr) => {
        projectArr.forEach(project => {
            list.push(project)
        })
    }
    

    const addProject = function(project) {
        list.push(project)
        //announce to projectListView
        pubsub.publishSync('projectAdded', project)
        pubsub.publish('infoChanged')
        ls('currentProjectID', project.getProjectInfo().id)

    }

    const removeProject = function(project) {
        const pos = list.indexOf(project)
        list.splice(pos, 1)
        pubsub.publish('infoChanged')
    }

    const findProject = (projectID) => { 
        const project =  list.filter(project => project.getProjectInfo().id == projectID)[0]
        if(!project) {
            
        }

        return project
    }

    const getList = () => {
        return [...list]
    }

    return {addProject, removeProject, findProject, getList, setList}
})()

export {Task, Project, ProjectList, pubsub}
