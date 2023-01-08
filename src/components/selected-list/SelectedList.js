import React from 'react'
import { useSelector } from 'react-redux'


import Header from '../header/Header'
import ListItem from '../list-item/ListItem'
import ListItemForm from '../list-item-form/ListItemForm'
import ClearListItemsModal from '../clear-list-items-modal/ClearListItemsModal'

const SelectedList = () => {

	const listItems = useSelector(state => state.selectedList.items)
	const userName = useSelector(state => state.userName)
	const clearAllModalOpen = useSelector(state => state.clearAllModalOpen)

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
				{renderContent()}
			</main>
			<ListItemForm />
		</>
		
	)
}

export default SelectedList