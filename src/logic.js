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

    function toJSON() {
        return {id, name, dueDate}
    }
    
    return {setTaskInfo, getTaskInfo, toJSON}
}

const Project = (id, name, description="") => {
    let list = []

    const setList = (taskArr) => {
        taskArr.forEach(task => {
            list.push(task)
        })
    }
    
    const addTask = function(task) {
        list.push(task)
        pubsub.publish("taskAdded", task)
        pubsub.publish('infoChanged', {})
        ls('currentTaskID', task.id)
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

    function toJSON() {
        return {id, name, description, list}
    }

    return {addTask, getProjectInfo, setProjectInfo, toJSON, setList} 
}

const ProjectList = (() => {
    let list = []

    const setList = (projectArr) => {
        projectArr.forEach(project => {
            list.push(project)
        })
    }
    

    const addProject = function(project) {
        list.push(project)
        pubsub.publishSync('projectAdded', project)
        pubsub.publish('infoChanged')
        ls('currentProjectID', project.getProjectInfo().id)
        // console.log(ls('currentProjectID'))

    }

    const removeProject = function(project) {
        const pos = list.indexOf()
        pubsub.publish('infoChanged', {})
    }

    const findProject = (projectID) => { 
        const project =  list.filter(project => project.getProjectInfo().id == projectID)[0]
        if(!project) {
            console.log({list: list.map(project => project.getProjectInfo().id), projectID})
        }

        return project
    }

    const getList = () => {
        return [...list]
    }

    return {addProject, removeProject, findProject, getList, setList}
})()

export {Task, Project, ProjectList, pubsub, ls}
