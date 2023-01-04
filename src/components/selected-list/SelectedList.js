import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleToDosModal } from '../../redux/actions/clearToDosModal'

import Header from '../header/Header'
import ToDoItem from '../to-do-item/ToDoItem'
import ToDoForm from '../to-do-form/ToDoForm'
import ClearToDosModal from '../clear-to-dos-modal/ClearToDosModal'

const SelectedList = () => {
	const dispatch = useDispatch()
	const listTitle = useSelector(state => state.selectedList.title)
	const listItems = useSelector(state => state.selectedList.items)
	const userName = useSelector(state => state.userName)
	const clearAllModalOpen = useSelector(state => state.clearAllModalOpen)

	const handleToggleClearAllModal = () => {
		dispatch(toggleToDosModal())
	}

	const renderClearButton = (
		listItems.length > 0 && 
			<p 
				className="w-fit ml-auto pb-2.5 italic opacity-90 tracking-wider text-right cursor-pointer hover:opacity-50 hover:underline"
				onClick={() => handleToggleClearAllModal()}
			>
				Clear To-do list
			</p>
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
		<div className={`h-[60%] overflow-scroll ${userName === ''  && 'hidden'}`}>
			<Header />
			{renderClearButton}
			{renderContent()}
			<ToDoForm />
		</div>
	)
}

export default SelectedList