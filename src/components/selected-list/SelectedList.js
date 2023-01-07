import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleToDosModal } from '../../redux/actions/clearToDosModal'
import { updateList } from '../../redux/actions/lists'
import { deselectList } from '../../redux/actions/selectedList'

import Header from '../header/Header'
import ToDoItem from '../to-do-item/ToDoItem'
import ToDoForm from '../to-do-form/ToDoForm'
import ClearToDosModal from '../clear-to-dos-modal/ClearToDosModal'

const SelectedList = () => {
	const dispatch = useDispatch()
	const selectedList = useSelector(state => state.selectedList)
	const listItems = useSelector(state => state.selectedList.items)
	const userName = useSelector(state => state.userName)
	const clearAllModalOpen = useSelector(state => state.clearAllModalOpen)

	const handleToggleClearAllModal = () => {
		dispatch(toggleToDosModal())
	}

	const handleBackClick = () => {
		dispatch(updateList(selectedList))
		dispatch(deselectList())
	}

	const renderBackAndClearButtons = (
		<section className="flex justify-between items-center">
			<div className="flex items-center flex-grow cursor-pointer hover:opacity-60 hover:underline transition-all" onClick={() => handleBackClick()}>
				<img src="/images/icons/arrow-back-outline.svg" className="mr-4 w-7"/>
				<p>Back to my lists</p>
			</div>
			{
				listItems.length > 0 && 
				<p 
					className="w-fit ml-auto pb-2.5 italic opacity-90 tracking-wider text-right cursor-pointer hover:opacity-50 hover:underline"
					onClick={() => handleToggleClearAllModal()}
				>
					Clear list
				</p>
			}
		</section>
	)

	const renderContent = () => {
		if (clearAllModalOpen) {
			return <ClearToDosModal />
		}
		else {
			if (listItems.length > 0) {
				return listItems.map((item, key) => {
					return (
						<ToDoItem item={item} key={key}/>
					)
				})
			}
		}
	}
	

	return (
		<>	
			<Header />
			<main className={`h-[60%] overflow-scroll ${userName === ''  && 'hidden'}`}>
				{renderBackAndClearButtons}
				{renderContent()}
			</main>
			<ToDoForm />
		</>
		
	)
}

export default SelectedList