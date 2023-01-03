import { TOGGLE_LISTS_MODAL } from "./types";

export const toggleListsModal = (clickedListId) => {
	return {
		type: TOGGLE_LISTS_MODAL,
		payload: clickedListId
	}
}