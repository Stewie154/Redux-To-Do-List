import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleListsModal } from '../../redux/actions/listsModal'
import { deleteList, deleteAllLists } from '../../redux/actions/lists'

const AllListsModal = () => {
	const dispatch = useDispatch()
	const clickedItemId = useSelector(state => state.listsModalInfo.clickedListId)

	const handleYesClick = () => {
		if (clickedItemId !== null) {
			dispatch(deleteList(clickedItemId))
			dispatch(toggleListsModal())
		}
		else {
			dispatch(deleteAllLists())
			dispatch(toggleListsModal())
		}
	}

	const handleNoClick = () => {
		dispatch(toggleListsModal())
	}

	const text = clickedItemId === null ? 'Are you sure you want to delete all lists and all of their contents?' : 'Are you sure you want to delete this list and all of it\'s contents?'

	return (
		<div className="modal-background-color absolute z-20 top-0 left-0 flex flex-col justify-center items-center rounded-lg border border-color-secondary h-full w-full">
			<main className="w-8/12 h-8/12 flex flex-col justify-center items-center">
				<h3 className="mb-10 text-lg sm:text-xl md:text-2xl">{text}</h3>
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
	)
}

export default AllListsModal