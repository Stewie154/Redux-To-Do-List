import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: {
		creating: false,
		newTitle: "",
	},
	listItem: {
		creating: false,
		newItemText: "",
	},
};

export const createContentSlice = createSlice({
	name: "createContent",
	initialState,
	reducers: {
		updateListTitle: (state, action) => {
			state.list.newTitle = action.payload;
		},
	},
});

export const { updateListTitle } = createContentSlice.actions;

export default createContentSlice.reducer;
