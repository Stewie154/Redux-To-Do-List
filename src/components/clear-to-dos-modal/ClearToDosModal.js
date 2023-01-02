import React from 'react'
import './ClearToDosModal.scss'

import { useDispatch } from 'react-redux'
import { clearAllToDos } from '../../redux/actions/toDos'
import { toggleToDosModal } from '../../redux/actions/clearToDosModal'

const ClearToDosModal = () => {
	const dispatch = useDispatch()

	const handleYesClick = () => {
		dispatch(clearAllToDos())
		dispatch(toggleToDosModal())
	}

	const handleNoClick = () => {
		dispatch(toggleToDosModal())
	}

	return (
		<div className="clear-to-dos-modal absolute z-20 top-0 left-0 flex flex-col justify-center items-center rounded-lg border border-color-secondary h-full w-full">
			<main className="w-8/12 h-8/12 flex flex-col justify-center items-center">
				<h3 className="mb-10 text-lg sm:text-xl md:text-2xl">Are you sure you want to clear this list?</h3>
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

export default ClearToDosModal