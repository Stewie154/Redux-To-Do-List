import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: {
		editingTitleId: null,
		currentTitle: "",
	},
};

export const editSlice = createSlice({
	name: "edit",
	initialState,
	reducers: {},
});

export default editSlice.reducer;
