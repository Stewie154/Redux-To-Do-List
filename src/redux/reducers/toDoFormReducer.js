import { UPDATE_TEXT } from "../actions/types";

let initialState = 'hello'

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_TEXT:
            state = action.payload
            return state
        default:
            return state
    }
}