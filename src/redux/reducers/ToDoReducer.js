import {
	CREATE_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	EDIT_TODO,
	CLEAR_ALL_TODOS
} from '../actions/types'

let initialState = [

]


export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_TODO:
			return [...state, action.payload]
		case TOGGLE_TODO:
			let editedToDos = state.map(item => {
				if (item.id === action.payload) {
					item.completed = !item.completed
					return item
				}
				return item
			})
			return editedToDos
		case DELETE_TODO:
			let newToDos = state.filter(item => item.id !== action.payload)
			return newToDos
		case EDIT_TODO:
			let updatedTextToDos = state.map(item => {
				if (item.id === action.payload.selectedToDo.id) {
					item.title = action.payload.updatedText
					return item
				}
				return item
			})
			return updatedTextToDos
		case CLEAR_ALL_TODOS:
			return state = []
		default:
			return state
	}
}