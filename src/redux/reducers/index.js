import { combineReducers } from "redux"
import toDoReducer from './toDoReducer'
import userReducer from './userReducer'

export default combineReducers({
    user: userReducer,
    toDos: toDoReducer
})