import React from "react";
import { useSelector } from "react-redux";
import Header from "../header/Header";
import ListComponent from "../list-component/ListComponent";
import CreateListForm from "../create-list-form/CreateListForm";
import AllListsModal from "../all-lists-modal/AllListsModal";

const AllLists = () => {
	const userName = useSelector((state) => state.userName);
	const lists = useSelector((state) => state.lists);
	// const listsModalOpen = useSelector(
	// 	(state) => state.listsModalInfo.modalOpen,
	// );
	const listsModalOpen = false;

	const renderContent = () => {
		if (listsModalOpen) {
			return <AllListsModal />;
		} else if (userName !== "") {
			return lists?.map((list) => {
				return <ListComponent key={list.id} list={list} />;
			});
		}
	};

	return (
		<>
			<Header />
			<main className="h-[60%] overflow-scroll">{renderContent()}</main>
			<CreateListForm />
		</>
	);
};

export default AllLists;
