import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "../slices/listsSlice";
import userReducer from "../slices/userSlice";
import selectedContentReducer from "../slices/selectedContentSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		lists: listsReducer,
		selectedContent: selectedContentReducer,
	},
});
