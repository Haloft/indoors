const initialState = require('../projects.json')

const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW':
            return [...state, action.data]       
        case 'EDIT':
            return state.map(project => project.id === action.data.id ? action.data : project)
        case 'DEL_PRO':
            return state.filter(project => project.id !== action.id);
        //  case 'INIT_PROJECTS':
        //       return action.data
        default:
            return state
    }
}




export default ProjectReducer