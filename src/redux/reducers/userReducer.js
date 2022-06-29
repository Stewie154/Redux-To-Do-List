import { SET_USERNAME } from "../actions/types";

let initialState = ''

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return action.payload
        default:
            return state
    }
}