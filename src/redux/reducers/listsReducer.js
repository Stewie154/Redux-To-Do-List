import {
	CREATE_LIST,
	DELETE_LIST
} from '../actions/types'

let initialState = [
	{
		id: 1, 
		title: 'Example List 1',
		selected: false,
		items: [
			
		]
	},
	{
		id: 2, 
		title: 'Example List 2',
		selected: false,
		items: [
			
		]
	},
	{
		id: 3, 
		title: 'Example List 3',
		selected: false,
		items: [
			
		]
	}
]

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