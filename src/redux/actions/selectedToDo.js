import { SELECT_TODO, DESELECT_TODO } from "./types"

export const selectToDo = (toDo) => {
	return {
		type: SELECT_TODO,
		payload: toDo
	}
}
export const deselectToDo = () => {
	return {
		type: DESELECT_TODO
	}
}