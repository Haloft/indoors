
const taskReducer = (state = [], action) => {
    console.log('state', state)
    switch (action.type) {
        case 'ADD_TASK': 
            console.log(action.data)            
            return [...state, action.data]    
        case 'EDIT_TASK':
            const id = action.editedTask.id      
            return state.map(task => task.id != id ? task : action.editedTask.attributes )
        case 'DEL_TASK':  
        return state.filter(st => st.id != action.id)
        case 'INIT_TASKS':
            console.log('action', action)
            return action.data
        
        default:
            return state
    }
}

export default taskReducer