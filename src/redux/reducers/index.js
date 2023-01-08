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
	selectedList: selectedListReducer,
	listEditingTitle: listEditingTitleReducer,
	currentListTitle: createListFormReducer,
	currentTaskText: toDoFormReducer,
	selectedListItem: selectedListItemReducer,
	clearAllModalOpen: clearToDosModalReducer,
	listsModalInfo: listsModalReducer
})