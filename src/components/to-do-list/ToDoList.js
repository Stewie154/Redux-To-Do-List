import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleToDosModal } from '../../redux/actions/clearToDosModal'

import ToDoItem from '../to-do-item/ToDoItem'
import ClearToDosModal from '../clear-to-dos-modal/ClearToDosModal'

const ToDoList = () => {
	const dispatch = useDispatch()
	const allToDos = useSelector(state => state.toDos)
	const userName = useSelector(state => state.userName)
	const clearAllModalOpen = useSelector(state => state.clearAllModalOpen)

	const handleToggleClearAllModal = () => {
		dispatch(toggleToDosModal())
	}

	const renderClearButton = (
		allToDos.length > 0 && 
			<p 
				className="w-fit ml-auto pb-2.5 underline italic opacity-90 tracking-wider text-right cursor-pointer hover:opacity-50"
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
			 return allToDos.map((item, key) => {
				return (
					<ToDoItem item={item} key={key}/>
				)
			})
		}
	}
	

	return (
		<div className={`h-[60%] overflow-scroll ${userName === ''  && 'hidden'}`}>
			{renderClearButton}
			{renderContent()}
		</div>
	)
}

export default ToDoList