const initialState = require('../projects.json')


const projectReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_NEW': 
            return [...state, action.data]    
        case 'EDIT':
            const id = action.editedProject.id      
            return state.map(project => project.id != id ? project : action.editedProject )
        case 'DEL_PRO':  
        return state.filter(st => st.id != action.id)
        case 'INIT_PROJECTS':          
            return action.data        
        default:
            return state
    }
}
export default projectReducer