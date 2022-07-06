import { SELECT_TODO, DESELECT_TODO } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case SELECT_TODO:
			state = action.payload
			return state 
		case DESELECT_TODO:
			state = null
			return state
		default:
			return state
	}
}