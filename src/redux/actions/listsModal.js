import { TOGGLE_LISTS_MODAL } from "./types";

export const toggleListsModal = (clickedListId = null) => {
	return {
		type: TOGGLE_LISTS_MODAL,
		payload: clickedListId
	}
}