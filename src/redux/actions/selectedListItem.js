import { SELECT_LIST_ITEM, DESELECT_LIST_ITEM } from "./types"

export const selectListItem = (listItem) => {
	return {
		type: SELECT_LIST_ITEM,
		payload: listItem
	}
}
export const deselectListItem = () => {
	return {
		type: DESELECT_LIST_ITEM
	}
}