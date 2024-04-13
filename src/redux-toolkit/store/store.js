import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "../slices/listsSlice";

export const store = configureStore({
	reducer: {
		lists: listsReducer,
	},
});