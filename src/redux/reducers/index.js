import { combineReducers } from "redux"
import toDoReducer from './toDoReducer'
import userReducer from './userReducer'
import toDoFormReducer from "./toDoFormReducer"
import selectedToDoReducer from "./selectedToDoReducer"
import clearToDosModalReducer from "./clearToDosModalReducer"
import listsReducer from "./listsReducer"
import selectedListReducer from "./selectedListReducer"
import createListFormReducer from "./createListFormReducer"
import listsModalReducer from "./listsModalReducer"

export default combineReducers({
	userName: userReducer,
	lists: listsReducer,
	selectedList: selectedListReducer,
	currentListTitle: createListFormReducer,
	toDos: toDoReducer,
	currentTaskText: toDoFormReducer,
	selectedToDo: selectedToDoReducer,
	clearAllModalOpen: clearToDosModalReducer,
	listsModalOpen: listsModalReducer
})