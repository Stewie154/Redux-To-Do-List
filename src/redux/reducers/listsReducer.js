import {
	CREATE_LIST,
	DELETE_LIST,
	DELETE_ALL_LISTS,
	SELECT_LIST
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
		case SELECT_LIST:
			return state.map(list => {
				if (list.id === action.payload) {
					list.selected = true
					return list
				}
				else {
					list.selected = false
					return list
				}
			})
		default:
			return state
	}
}