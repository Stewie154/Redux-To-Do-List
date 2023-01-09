import { SELECT_LIST_FOR_TITLE_EDIT, DESELECT_LIST_FOR_TITLE_EDIT } from "./types"

export const selectListForTitleEdit = (list) => {
	return {
		type: SELECT_LIST_FOR_TITLE_EDIT,
		payload: list
	}
}

export const deselectListForTitleEdit = () => {
	return {
		type: DESELECT_LIST_FOR_TITLE_EDIT,
	}
}
