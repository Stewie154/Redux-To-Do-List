import { SET_USERNAME } from "./types"

export const setUserName = (username) => {
    return {
        type: SET_USERNAME,
        payload: username
    }
}