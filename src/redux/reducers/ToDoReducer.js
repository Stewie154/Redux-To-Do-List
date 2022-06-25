import {
    FETCH_ALL_TODOS,
    FETCH_TODO,
    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_ALL_TODOS:
            return state
        case CREATE_TODO:
            return [...state, action.payload]
        default:
            return state   
    }
}