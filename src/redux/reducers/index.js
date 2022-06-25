import { combineReducers } from "redux"
import toDoReducer from './ToDoReducer'

export default combineReducers({
    toDos: toDoReducer
})