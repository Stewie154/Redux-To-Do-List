import { combineReducers } from "redux"
import userReducer from './userReducer'
import toDoFormReducer from "./toDoFormReducer"
import selectedListItemReducer from "./selectedListItemReducer"
import clearToDosModalReducer from "./clearToDosModalReducer"
import listsReducer from "./listsReducer"
import selectedListReducer from "./selectedListReducer"
import createListFormReducer from "./createListFormReducer"
import listEditingTitleReducer from "./listEditingTitleReducer"
import listsModalReducer from "./listsModalReducer"

export default combineReducers({
	userName: userReducer,
	lists: listsReducer,
	listsModalInfo: listsModalReducer,
	currentListTitle: createListFormReducer,
	listEditingTitle: listEditingTitleReducer,
	selectedList: selectedListReducer,
	selectedListItem: selectedListItemReducer,
	currentTaskText: toDoFormReducer,
	clearAllModalOpen: clearToDosModalReducer
})