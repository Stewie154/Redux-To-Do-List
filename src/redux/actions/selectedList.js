import { SELECT_LIST, DESELECT_LIST, CREATE_LIST_ITEM, DELETE_LIST_ITEM } from "./types"

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