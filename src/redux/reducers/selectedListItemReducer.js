import { SELECT_LIST_ITEM, DESELECT_LIST_ITEM } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case SELECT_LIST_ITEM:
			return action.payload 
		case DESELECT_LIST_ITEM:
			return null
		default:
			return state
	}
}