import { SELECT_TODO } from '../actions/types'

export default (state, action) => {
	switch (action.type) {
		case SELECT_TODO:
			state = action.payload
	}
}