import { EDIT_LIST_NAME } from "./types"

export const updateText = (text) => {
	return {
		type: EDIT_LIST_NAME,
		payload: text
	}
}