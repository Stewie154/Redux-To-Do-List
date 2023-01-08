import { TOGGLE_CLEAR_LIST_ITEMS_MODAL } from '../actions/types'

let initialState = false

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_CLEAR_LIST_ITEMS_MODAL:
			let toggledState = !state
			return toggledState
		default:
			return state
	}
}