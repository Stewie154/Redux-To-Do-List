import { SELECT_LIST, DESELECT_LIST } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case SELECT_LIST:
			state = action.payload
			return state
		case DESELECT_LIST:
			state = null
			return state
		default:
			return state
	}
}