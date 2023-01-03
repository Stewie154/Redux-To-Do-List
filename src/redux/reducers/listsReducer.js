import {
	CREATE_LIST,
	DELETE_LIST
} from '../actions/types'

let initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_LIST:
			return [...state, action.payload]
		case DELETE_LIST:
			let newList = state.filter(item => item.id !== action.payload)
			return newList
		default:
			return state
	}
}