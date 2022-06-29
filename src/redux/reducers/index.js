import { combineReducers } from "redux"
import toDoReducer from './toDoReducer'
import userReducer from './userReducer'
import toDoFormReducer from "./toDoFormReducer"

export default combineReducers({
    userName: userReducer,
    toDos: toDoReducer,
    currentText: toDoFormReducer
})