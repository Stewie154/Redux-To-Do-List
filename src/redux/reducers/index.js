import { combineReducers } from "redux";
import userReducer from "./userReducer";
import listItemFormReducer from "./listItemFormReducer";
import selectedListItemReducer from "./selectedListItemReducer";
import clearListItemsModalReducer from "./clearListItemsModalReducer";
import listsReducer from "./listsReducer";
import selectedListReducer from "./selectedListReducer";
import createListFormReducer from "./createListFormReducer";
import listEditingTitleReducer from "./listEditingTitleReducer";
import listsModalReducer from "./listsModalReducer";

export default combineReducers({
	userName: userReducer,
	lists: listsReducer,
	listModalInfo: listsModalReducer,
	currentListTitle: createListFormReducer,
	listEditingTitle: listEditingTitleReducer,
	selectedList: selectedListReducer,
	selectedListItem: selectedListItemReducer,
	currentTaskText: listItemFormReducer,
	clearAllModalOpen: clearListItemsModalReducer,
});
