import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedList: null,
};

export const selectedContentSlice = createSlice({
	name: "selectedContent",
	initialState,
	reducers: {},
});

export default selectedContentSlice.reducer;
