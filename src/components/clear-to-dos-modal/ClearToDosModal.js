import React from 'react'
import './ClearToDosModal.scss'

const ClearToDosModal = () => {
	return (
		<div className="clear-to-dos-modal absolute z-20 top-0 left-0 flex flex-col justify-center items-center rounded-lg border border-color-secondary h-full w-full">
			<main className="w-8/12 h-8/12 flex justify-center items-center">
				<section className="flex justify-center items-center">
					<button className="mx-3 self-center border border-color-secondary py-2 px-4 rounded-lg transition-all duration-75 ease-out hover:ease-in hover:opacity-70">Yes</button>
					<button className="mx-3 self-center border border-color-secondary py-2 px-4 rounded-lg transition-all duration-75 ease-out hover:ease-in hover:opacity-70">No</button>
				</section>
			</main>
		</div>
	)
}

export default ClearToDosModal