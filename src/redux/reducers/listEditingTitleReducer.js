import { SELECT_LIST_FOR_TITLE_EDIT, DESELECT_LIST_FOR_TITLE_EDIT } from "../actions/types";

let initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case SELECT_LIST_FOR_TITLE_EDIT:
			return action.payload
		case DESELECT_LIST_FOR_TITLE_EDIT:
			return null
		default:
			return state
	}
}