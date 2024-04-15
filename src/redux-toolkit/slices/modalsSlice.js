import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listModalInfo: {
		modalOpen: false,
		clickedListId: null,
	},
	clearAllModalOpen: false,
};

export const modalsSlice = createSlice({
	name: "modalsInfo",
	initialState,
	reducers: {
		toggleListModal: (state) => {
			state.listModalInfo.modalOpen = !state.listModalInfo.modalOpen;
		},
	},
});

export const { toggleListModal } = modalsSlice.actions;

export default modalsSlice.reducer;
