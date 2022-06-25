import { SET_USERNAME } from "./types"

export const setUser = (username) => {
    return {
        type: SET_USERNAME,
        payload: username
    }
}