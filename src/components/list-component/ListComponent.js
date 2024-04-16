import React from "react";
import Fade from "react-reveal/Fade";

import { useDispatch } from "react-redux";

import { toggleListModal } from "../../redux-toolkit/slices/modalsSlice";
import { selectList } from "../../redux/actions/selectedList";
import { selectListForTitleEdit } from "../../redux/actions/listEditingTitle";

const ListComponent = ({ list }) => {
	const dispatch = useDispatch();

	const handleDeleteClick = (id) => {
		dispatch(toggleListModal(id));
	};

	const handleSelectList = (list) => {
		dispatch(selectList(list));
	};

	const handleEditListTitle = (list) => {
		dispatch(selectListForTitleEdit(list));
	};

	return (
		<Fade top duration={500}>
			<div className="flex justify-between items-center py-2">
				<p
					className={`text-lg text-left max-w-[70%] sm:max-w-full md:text-2xl hover:opacity-60 cursor-pointer`}
					onClick={() => handleSelectList(list)}
				>
					{list.title}
				</p>
				<div className="flex">
					<img
						src="/images/icons/pencil.svg"
						alt="check icon"
						className="w-5 md:w-7 cursor-pointer mr-3 transition-all duration-150 ease-out sm:hover:ease-in sm:hover:opacity-50"
						onClick={() => handleEditListTitle(list)}
					/>
					<img
						src="/images/icons/trash-outline.svg"
						alt="trash icon"
						className="w-6 md:w-8 cursor-pointer transition-all duration-150 ease-out sm:hover:ease-in sm:hover:opacity-50"
						onClick={() => handleDeleteClick(list.id)}
					/>
				</div>
			</div>
		</Fade>
	);
};

export default ListComponent;
