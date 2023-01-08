import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleListsModal } from '../../redux/actions/listsModal'
import Header from '../header/Header'
import ListComponent from '../list-component/ListComponent'
import CreateListForm from '../create-list-form/CreateListForm'
import AllListsModal from '../all-lists-modal/AllListsModal'

const AllLists = () => {
	const dispatch = useDispatch()

	const userName = useSelector(state => state.userName)
	const listsModalOpen = useSelector(state => state.listsModalInfo.modalOpen)
	const lists = useSelector(state => state.lists)

	const handleClearAllClick = () => {
		dispatch(toggleListsModal())
	}

	const renderClearButton = (
		lists.length > 1 & userName != '' ?
			<p 
				className="w-fit ml-auto pb-2.5 italic opacity-90 tracking-wider text-right cursor-pointer hover:opacity-50 hover:underline"
				onClick={() => handleClearAllClick()}
			>
				Clear all lists
			</p>
			:
			null
	)


	const renderContent = () => {
		if (userName !== '') {
			return lists.map(list => {
				return (
					<ListComponent key={list.id} list={list} />
				)
			})
		}
	}

	return (
		<>
			<Header />
			<main className="h-[60%] overflow-scroll">
				{renderClearButton}
				{renderContent()}
			</main>
			<CreateListForm />
			{listsModalOpen ? <AllListsModal /> : null}
		</>
	)
}

export default AllLists