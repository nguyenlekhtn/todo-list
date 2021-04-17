// import { IS_FINISHED } from './event-types.js'
import {projectListView, TaskListView} from './render'
import {Task, Project, ProjectList, pubsub, ls} from './logic'

const Controller = (() => {
    let currentProject;
    let newProjectID
    let newTaskID

    if (!ls.get('projectList'))
    {
        populateStorage()
    }
    else {
        setItems()
    }

    function populateStorage() {
        const defaultProjectName = "Default Project"
        const defaultProjectID = 0
        const defaultProject = Project(defaultProjectID, defaultProjectName, "")
        ProjectList.addProject(defaultProject)
        currentProject = defaultProject
        const defaultTaskID = 0
        const defaultTask = Task(0, defaultTaskName, defaultDate)

        defaultProject.addTask(defaultTask)


        newProjectID = defaultProjectID + 1;
        newTaskID = defaultTaskID + 1
    }

    function setItems() {
        const plainProjectArr = ls('projectList')
        const richProjectArr = parseProjectList(plainProjectArr)
        
        const lastProjectID = ls('currentProjectID')
        const lastTaskID = ls('currentTaskID')

        richProjectArr.forEach(project => {
            ProjectList.addProject(project)
        })
        
        newProjectID = lastProjectID + 1
        newTaskID = lastTaskID + 1
    }

    if (ProjectList.getList().length != 0) {
        loadFirstProjectInView()
    }
    
    function loadFirstProjectInView() {
        currentProject = ProjectList.getList()[0]
        console.log({currentProject})

        if(currentProject) {
            loadProject(currentProject.getProjectInfo().id)
        }
    }

    pubsub.subscribe("newInfoSubmitted", (data, info) => {
        
        const newProject = Project(newProjectID++, data.name, data.description)
        ProjectList.addProject(newProject)
        loadProject(newProject.getProjectInfo().id)
    })
    
    pubsub.subscribe('projectSelected', (id, info) => {
        loadProject(id)
    })

    function loadProject(id) {
        
        const projectSelected = ProjectList.findProject(id)
        
        if(!projectSelected) {
            currentProject = projectSelected
        }
        pubsub.publish('changeProject', projectSelected)
        pubsub.publish('changeProjectInList', projectSelected)
        pubsub.publish('loadTaskList', projectSelected.getProjectInfo().list)
    }

    pubsub.subscribe('projectInfoSubmitted', ({title, description},info) => {
        currentProject.setProjectInfo(title, description)
        
    })
    

    pubsub.subscribe('taskInfoSubmitted', ({task, title, dueDate}, info) => {
        task.setTaskInfo(title, dueDate)
    })

    pubsub.subscribe('newTaskSubmitted', ({title, dueDate}, topic) => {
        const newTask = Task(newTaskID++, title, dueDate)
        currentProject.addTask(newTask)
    })

    pubsub.subscribe('taskCompletedChanged', (task, topic) => {
        task.toggleCompleted()
    })

    pubsub.subscribe('infoChanged', (data, topic) => {
        ls('projectList', ProjectList.getList())
    })

    pubsub.subscribe('removeCurrentProject', () => {
        const current = currentProject
        pubsub.publishSync('removeProjectDOM', current)
        loadFirstProjectInView()
    })

    pubsub.subscribe('taskDOMremoved', (task, info) => {
        console.log({task})
        console.log({currentProject})
        currentProject.removeTask(task)

    })

    function parseProjectList(projectArr) {
        for(let i = 0; i < projectArr.length; i++) {
            const plainProject = projectArr[i]
            const richProject = Project(plainProject.id, plainProject.name, plainProject.description)
            const taskArr = plainProject.list
            for(let i = 0; i< taskArr.length; i++) {
                const plainTask = taskArr[i]
                const richTask = Task(plainTask.id, plainTask.name, plainTask.dueDate, plainTask.isCompleted)
                taskArr[i] = richTask
            }
            richProject.setList(taskArr)
            projectArr[i] = richProject
        }

        return projectArr
    }
    
    return {}
})()



