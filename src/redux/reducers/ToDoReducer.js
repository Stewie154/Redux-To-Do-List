import {
	FETCH_ALL_TODOS,
	FETCH_TODO,
	CREATE_TODO,
	EDIT_TODO,
	DELETE_TODO
} from '../actions/types'

let initialState = [
	{
		id: 0,
		title: 'Clean the bathroom',
		completed: false
	},
	{
		id: 1,
		title: 'Make dinner',
		completed: true
	},
	{
		id: 2,
		title: 'Practice redux',
		completed: false
	}
]    
	

export default (state = initialState, action) => {
	switch(action.type) {
		case FETCH_ALL_TODOS:
			return state
		case CREATE_TODO:
			return [...state, action.payload]
		case DELETE_TODO:
			// let newToDos = state.filter(action.payload => )
			return [...state, action.payload]
		default:
			return state   
	}
}