import {
	CREATE_TODO,
	TOGGLE_TODO,
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
            console.log(editedToDos)
			return editedToDos
		case DELETE_TODO:
			let newToDos = state.filter(item => item.id !== action.payload)
			return newToDos
		default:
			return state   
	}
}