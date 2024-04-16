import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleListModal } from "../../redux-toolkit/slices/modalsSlice";
import { deleteList, deleteAllLists } from "../../redux/actions/lists";

const AllListsModal = () => {
	const dispatch = useDispatch();
	const clickedItemId = useSelector(
		(state) => state.listModalInfo.clickedListId,
	);
	const lists = useSelector((state) => state.lists);

	const handleYesClick = () => {
		if (clickedItemId !== null) {
			dispatch(deleteList(clickedItemId));
			dispatch(toggleListModal());
		} else {
			dispatch(deleteAllLists());
			dispatch(toggleListModal());
		}
	};

	const handleNoClick = () => {
		dispatch(toggleListModal());
	};

	const getListTitle = () => {
		if (clickedItemId !== null) {
			let list = lists.find((li) => li.id === clickedItemId);
			return list.title;
		}
	};

	const text =
		clickedItemId === null ? (
			<h3 className="mb-10 text-lg sm:text-xl md:text-2xl">
				Are you sure you want to{" "}
				<span className="italic text-red-500">delete all lists</span>{" "}
				and all of their contents?
			</h3>
		) : (
			<h3 className="mb-10 text-lg sm:text-xl md:text-2xl">
				Are you sure you want to{" "}
				<span className="italic text-red-500">
					delete "{getListTitle()}"
				</span>{" "}
				and all of it's contents?
			</h3>
		);

	return (
		<div className="modal-background-color absolute z-20 top-0 left-0 flex flex-col justify-center items-center rounded-lg border border-color-secondary h-full w-full">
			<main className="w-8/12 h-8/12 flex flex-col justify-center items-center">
				{text}
				<section className="flex justify-center items-center">
					<button
						className="mx-3 self-center border border-color-secondary py-2 px-4 rounded-lg transition-all duration-75 ease-out hover:ease-in hover:opacity-70"
						onClick={() => handleYesClick()}
					>
						Yes
					</button>
					<button
						className="mx-3 self-center border border-color-secondary py-2 px-4 rounded-lg transition-all duration-75 ease-out hover:ease-in hover:opacity-70"
						onClick={() => handleNoClick()}
					>
						No
					</button>
				</section>
			</main>
		</div>
	);
};

export default AllListsModal;
