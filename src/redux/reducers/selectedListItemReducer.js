import { SELECT_LIST_ITEM, DESELECT_LIST_ITEM } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case SELECT_LIST_ITEM:
			state = action.payload
			return state 
		case DESELECT_LIST_ITEM:
			state = null
			return state
		default:
			return state
	}
}