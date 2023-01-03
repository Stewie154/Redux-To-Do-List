import { CREATE_LIST, DELETE_LIST } from "./types";

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