import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import projectReducer from './reducers/projectReducer'
import taskReducer from './reducers/taskReducer'

const reducer = combineReducers({
  projects: projectReducer,
  tasks: taskReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store