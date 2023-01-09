import {
	CREATE_LIST,
	DELETE_LIST,
	DELETE_ALL_LISTS,
	UPDATE_LIST
} from '../actions/types'

let initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_LIST:
			return [...state, action.payload]
		case DELETE_LIST:
			let newList = state.filter(item => item.id !== action.payload)
			return newList
		case UPDATE_LIST:
			let updatedList = state.map(list => {
				if (list.id === action.payload.id) {
					list = action.payload
					return list
				}
				else {
					return list
				}
			})
			return updatedList
		case DELETE_ALL_LISTS:
			return []
		default:
			return state
	}
}