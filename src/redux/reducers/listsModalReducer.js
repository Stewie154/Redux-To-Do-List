import { TOGGLE_LISTS_MODAL } from "../actions/types";

const initialState = {
	modalOpen: false,
	clickedListId: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_LISTS_MODAL:
			const newState = {
				modalOpen: !state.modalOpen,
				clickedListId: action.payload
			}
			return newState
		default:
			return state
	}
}