import { CREATE_LIST, DELETE_LIST, DELETE_ALL_LISTS, SELECT_LIST } from "./types";

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

export const deleteAllLists = () => {
	return {
		type: DELETE_ALL_LISTS
	}
}

export const selectList = (id) => {
	return {
		type: SELECT_LIST,
		payload: id
	}
}