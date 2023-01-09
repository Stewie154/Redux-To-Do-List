import { UPDATE_TEXT } from "../actions/types";

let initialState = ''

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_TEXT:
            return action.payload
        default:
            return state
    }
}