import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: {
		id: null,
		title: "",
	},
};

export const editSlice = createSlice({
	name: "edit",
	initialState,
	reducers: {
		updateId: (state, action) => {
			state.list.id = action.payload;
		},
	},
});

export const { updateId } = editSlice.actions;

export default editSlice.reducer;
