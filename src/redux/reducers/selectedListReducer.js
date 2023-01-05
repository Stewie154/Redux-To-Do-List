import { SELECT_LIST, DESELECT_LIST, CREATE_LIST_ITEM } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case SELECT_LIST:
			state = action.payload
			return state
		case DESELECT_LIST:
			state = null
			return state
		case CREATE_LIST_ITEM:
			state.items = [...state.items, action.payload]
			return state
		default:
			return state
	}
}