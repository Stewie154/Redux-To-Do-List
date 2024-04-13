import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "Name here",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
});

export default userSlice.reducer;
