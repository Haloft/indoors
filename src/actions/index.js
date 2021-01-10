import ProjectService from '../services/projects'
import TaskService from '../services/tasks'

export const editProject = (data) => {
  const id = data.id
  return async dispatch => {
    const editedProject = await ProjectService.updateProject(id, data)
    console.log(editedProject)
    dispatch({
      type: 'EDIT',
      editedProject,
    })
  }
}

export const delProject = (id) => {
  return async dispatch => {
    await ProjectService.delProject(id)
    dispatch({
      type: 'DEL_PRO',
      id
    })
  }
}

export const initProjects = () => {

  return async dispatch => {
    const projects = await ProjectService.getAll()
    dispatch({
      type: 'INIT_PROJECTS',
      data: projects,
    })
  }
}

export const newProject = data => {

  return async dispatch => {
    const newProject = await ProjectService.createNew(data)
    console.log(newProject)
    dispatch({
      type: 'ADD_NEW',
      data: newProject.data
    })
  }
}

export const newTask = data => {

  return async dispatch => {
    const newTask = await TaskService.createNew(data)
    console.log(newTask)
    dispatch({
      type: 'ADD_TASK',
      data: newTask,
    })
  }
}

export const editTask = (data) => {
  const id = data.id
  return async dispatch => {
    const editedTask = await TaskService.updateTask(id, data)
    console.log(editedTask)
    dispatch({
      type: 'EDIT_TASK',
      editedTask,
    })
  }
}

export const delTask = (id) => {
  console.log('id', id)
  return async dispatch => {
    await TaskService.delTask(id)
    dispatch({
      type: 'DEL_TASK',
      id
    })
  }
}

export const initTasks = () => {

  return async dispatch => {
    const tasks = await TaskService.getAll()
    dispatch({
      type: 'INIT_TASKS',
      data: tasks,
    })
  }
}