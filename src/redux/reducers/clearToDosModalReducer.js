import { TOGGLE_CLEAR_TO_DOS_MODAL } from '../actions/types'

let initialState = false

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_CLEAR_TO_DOS_MODAL:
			let toggledState = !state
			return toggledState
		default:
			return state
	}
}