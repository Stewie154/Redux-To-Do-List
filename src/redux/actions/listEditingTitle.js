import { SELECT_LIST_FOR_TITLE_UPDATE, DESELECT_LIST_FOR_TITLE_UPDATE } from "./types"

export const selectListForTitleUpdate = (list) => {
	return {
		type: SELECT_LIST_FOR_TITLE_UPDATE,
		payload: list
	}
}

export const deselectListForTitleUpdate = () => {
	return {
		type: DESELECT_LIST_FOR_TITLE_UPDATE,
	}
}
