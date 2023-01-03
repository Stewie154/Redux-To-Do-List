import { EDIT_LIST_NAME } from "../actions/types";

let initialState = ''

export default (state = initialState, action) => {
	switch (action.type) {
		case EDIT_LIST_NAME:
			state = action.payload
			return state
		default:
			return state
	}
}