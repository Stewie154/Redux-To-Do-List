import {
	CREATE_LIST,
	DELETE_LIST,
	DELETE_ALL_LISTS
} from '../actions/types'

let initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_LIST:
			return [...state, action.payload]
		case DELETE_LIST:
			let newList = state.filter(item => item.id !== action.payload)
			return newList
		case DELETE_ALL_LISTS:
			state = []
			return state
		default:
			return state
	}
}