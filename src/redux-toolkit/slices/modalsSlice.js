import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listsModalInfo: {
		modalOpen: false,
		clickedListId: null,
	},
	clearAllModalOpen: false,
};

export const modalsSlice = createSlice({
	name: "modalsInfo",
	initialState,
	reducers: {},
});

export default modalsSlice.reducer;
