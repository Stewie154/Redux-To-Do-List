import { TOGGLE_LISTS_MODAL } from "../actions/types";

const initialState = false

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_LISTS_MODAL:
			state = !state
			return state
		default:
			return state
	}
}