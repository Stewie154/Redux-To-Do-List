import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateText } from "../../redux/actions/createListForm";
import { updateList } from "../../redux/actions/lists";
import { deselectListForTitleEdit } from "../../redux/actions/listEditingTitle";
import { updateListTitle } from "../../redux-toolkit/slices/createContentSlice";
import { createList } from "../../redux-toolkit/slices/listsSlice";

const CreateListForm = () => {
	const dispatch = useDispatch();
	const newListTitle = useSelector(
		(state) => state.createContent.list.newTitle,
	);
	const userName = useSelector((state) => state.userName);
	const editContentListId = useSelector((state) => state.editContent.list.id);
	const editContentListTitle = useSelector(
		(state) => state.editContent.list.title,
	);
	const listModalInfo = useSelector(
		(state) => state.modalsInfo.listModalInfo,
	);

	const textInput = useRef(null);

	useEffect(() => {
		if ((window.innerWidth > 820) & (listModalInfo.modalOpen === false)) {
			textInput.current.focus();
		}
	}, [textInput, userName, listModalInfo]);

	useEffect(() => {
		if (editContentListId !== null) {
			dispatch(updateListTitle(editContentListTitle));
			textInput.current.focus();
		}
	}, [editContentListTitle, editContentListId]);

	const handleChange = (textValue) => {
		dispatch(updateListTitle(textValue));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (newListTitle !== "" && editContentListId === null) {
			let newList = {
				id: Date.now(),
				title: newListTitle,
				items: [],
			};
			dispatch(createList(newList));
			dispatch(updateListTitle(""));
		} else {
			let updatedList = { ...editContentListTitle, title: newListTitle };
			dispatch(updateList(updatedList));
			dispatch(updateText(""));
			dispatch(deselectListForTitleEdit());
		}
	};

	const buttonText =
		editContentListId === null ? "Create List" : "Update Title";

	return (
		<form
			className={`${
				userName === "" ? "hidden" : "absolute"
			} bottom-0 left-0 w-full h-[20%] px-5 md:px-10 flex justify-between items-between border-t rounded-b-lg border-color-secondary container-background-color`}
			onSubmit={(event) => handleSubmit(event)}
		>
			<input
				type="text"
				value={newListTitle}
				placeholder="Enter list title..."
				className="w-9/12 bg-transparent border-0 text-lg md:text-2xl focus:outline-0"
				onChange={(e) => {
					handleChange(e.target.value);
				}}
				ref={textInput}
			/>
			<button
				type="submit"
				className="self-center border border-color-secondary py-2 px-4 rounded-lg transition-all duration-75 ease-out hover:ease-in hover:opacity-70"
			>
				{buttonText}
			</button>
		</form>
	);
};

export default CreateListForm;
