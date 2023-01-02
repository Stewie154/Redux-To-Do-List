import { CREATE_LIST } from "./types";

export const createList = (list) => {
	return {
		type: CREATE_LIST,
		payload: list
	}
}