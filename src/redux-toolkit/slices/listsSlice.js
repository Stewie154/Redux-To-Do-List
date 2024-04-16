import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 1,
		title: "List One Title",
		items: [
			{
				id: 0,
				title: "List one, item 1",
				completed: false,
			},
			{
				id: 1,
				title: "List one, item 2",
				completed: false,
			},
			{
				id: 2,
				title: "List one, item 3",
				completed: false,
			},
		],
	},
	{
		id: 2,
		title: "List Two Title",
		items: [
			{
				id: 0,
				title: "List Two, item 1",
				completed: false,
			},
			{
				id: 1,
				title: "List Two, item 2",
				completed: false,
			},
			{
				id: 2,
				title: "List Two, item 3",
				completed: false,
			},
		],
	},
	{
		id: 3,
		title: "List Three Title",
		items: [
			{
				id: 0,
				title: "List Three, item 1",
				completed: false,
			},
			{
				id: 1,
				title: "List Three, item 2",
				completed: false,
			},
			{
				id: 2,
				title: "List Three, item 3",
				completed: false,
			},
		],
	},
];

export const listsSlice = createSlice({
	name: "lists",
	initialState,
	reducers: {
		deleteList: (state, action) => {
			state.filter((list) => list.id === action.payload);
		},
	},
});

export const { deleteList } = listsSlice.actions;

export default listsSlice.reducer;
