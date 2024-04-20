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
		editList: (state, action) => {
			state.list.id = action.payload.id;
			state.list.title = action.payload.title;
		},
	},
});

export const { editList } = editSlice.actions;

export default editSlice.reducer;
