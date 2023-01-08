import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleListItemsModal } from '../../redux/actions/clearListItemsModal'
import { updateList } from '../../redux/actions/lists'
import { deselectList } from '../../redux/actions/selectedList'

import Header from '../header/Header'
import ListItem from '../list-item/ListItem'
import ListItemForm from '../list-item-form/ListItemForm'
import ClearListItemsModal from '../clear-list-items-modal/ClearListItemsModal'
import ClearListButton from '../buttons/clear-list-button/ClearListButton'

const SelectedList = () => {
	const dispatch = useDispatch()
	const selectedList = useSelector(state => state.selectedList)
	const listItems = useSelector(state => state.selectedList.items)
	const userName = useSelector(state => state.userName)
	const clearAllModalOpen = useSelector(state => state.clearAllModalOpen)


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
			{listItems.length > 1 && <ClearListButton />}
		</section>
	)

	const renderContent = () => {
		if (clearAllModalOpen) {
			return <ClearListItemsModal />
		}
		else {
			if (listItems.length > 0) {
				return listItems.map((item, key) => {
					return (
						<ListItem item={item} key={key}/>
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
			<ListItemForm />
		</>
		
	)
}

export default SelectedList