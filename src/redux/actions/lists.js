import { CREATE_LIST, DELETE_LIST, DELETE_ALL_LISTS, UPDATE_LIST } from "./types";

export const createList = (list) => {
	return {
		type: CREATE_LIST,
		payload: list
	}
}

export const deleteList = (listId) => {
	return {
		type: DELETE_LIST,
		payload: listId
	}
}

export const updateList = (list) => {
	return {
		type: UPDATE_LIST,
		payload: list
	}
}

export const deleteAllLists = () => {
	return {
		type: DELETE_ALL_LISTS
	}
}