import { SELECT_LIST, DESELECT_LIST } from "./types"

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