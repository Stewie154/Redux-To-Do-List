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
		updateNewListTitle: (state, action) => {
			return (state.list.newListTitle = action.payload);
		},
	},
});

export const { updateNewListTitle } = createContentSlice.actions;

export default createContentSlice.reducer;
