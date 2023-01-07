import { SELECT_LIST_FOR_TITLE_UPDATE, DESELECT_LIST_FOR_TITLE_UPDATE } from "../actions/types";

let initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case SELECT_LIST_FOR_TITLE_UPDATE:
			return action.payload
		case DESELECT_LIST_FOR_TITLE_UPDATE:
			return null
		default:
			return state
	}
}