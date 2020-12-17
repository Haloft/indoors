


export const newProject = (data) => {
  return {
    type: 'ADD_NEW',
    data
  }
}

export const editProject = (data) => {
  return {
    type: 'EDIT',
    data
  }
}

export const delProject = (id) => {
  return {
    type: 'DEL_PRO',
    id
  }
}


/*

Action creators when using external API


export const initProjects = () => {
  return async dispatch => {
    const projects = await projectService.getAll()
    dispatch({
      type: 'INIT_PROJECTS',
      data: projects,
    })
  }
}

export const newProject = data => {
  return async dispatch => {
    const newProject = await projetService.createNew(data)
    dispatch({
      type: 'ADD_NEW',
      data,
    })
  }
}

*/