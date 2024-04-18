import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: {
		creating: false,
		newListText: "",
	},
	listItem: {
		creating: false,
		newItemText: "",
	},
};

export const createContentSlice = createSlice({
	name: "createContent",
	initialState,
	reducers: {},
});

export default createContentSlice.reducer;
