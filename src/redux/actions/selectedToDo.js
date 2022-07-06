import { SELECT_TODO } from "./types"

export const selectToDo = (toDo) => {
	return {
		type: SELECT_TODO,
		payload: toDo
	}
}
