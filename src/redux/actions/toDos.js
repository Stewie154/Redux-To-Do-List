import {
	CREATE_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	EDIT_TODO
} from './types'

export const createToDo = (toDo) => {
	return {
		type: CREATE_TODO,
		payload: toDo
	}
}

export const toggleToDo = (id) => {
	return {
		type: TOGGLE_TODO,
		payload: id
	}
}

export const deleteToDo = (id) => {
	return {
		type: DELETE_TODO,
		payload: id
	}
}

export const editToDo = (id) => {
	return {
		type: EDIT_TODO,
		payload: id
	}
}