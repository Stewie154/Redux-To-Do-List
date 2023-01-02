import { combineReducers } from "redux"
import toDoReducer from './toDoReducer'
import userReducer from './userReducer'
import toDoFormReducer from "./toDoFormReducer"
import selectedToDoReducer from "./selectedToDoReducer"
import clearToDosModalReducer from "./clearToDosModalReducer"
import listsReducer from "./listsReducer"

export default combineReducers({
	userName: userReducer,
	toDos: toDoReducer,
	currentText: toDoFormReducer,
	selectedToDo: selectedToDoReducer,
	clearAllModalOpen: clearToDosModalReducer,
	lists: listsReducer
})