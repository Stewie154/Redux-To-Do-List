import { 
	SELECT_LIST, 
	DESELECT_LIST,
	CREATE_LIST_ITEM, 
	DELETE_LIST_ITEM, 
	TOGGLE_LIST_ITEM, 
	EDIT_LIST_ITEM,
	CLEAR_LIST
} from "./types"

export const selectList = (list) => {
	return {
		type: SELECT_LIST,
		payload: list
	}
}

export const deselectList = () => {
	return {
		type: DESELECT_LIST
	}
}

export const createListItem = (listItem) => {
	return {
		type: CREATE_LIST_ITEM,
		payload: listItem
	}
}

export const deleteListItem = (id) => {
	return {
		type: DELETE_LIST_ITEM,
		payload: id
	}
}

export const clearList = () => {
	return {
		type: CLEAR_LIST
	}
}

export const toggleListItem = (id) => {
	return {
		type: TOGGLE_LIST_ITEM,
		payload: id
	}
}

export const editListItem = (dataObject) => {
	return {
		type: EDIT_LIST_ITEM,
		payload: dataObject
	}
}