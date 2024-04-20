import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listTitle: "",
	listItemTitle: "",
};

export const createContentSlice = createSlice({
	name: "createContent",
	initialState,
	reducers: {
		updateListTitle: (state, action) => {
			state.listTitle = action.payload;
		},
	},
});

export const { updateListTitle } = createContentSlice.actions;

export default createContentSlice.reducer;
