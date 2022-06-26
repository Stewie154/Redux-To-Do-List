import React from 'react'

const ToDoItem = ({ item }) => {
	return (
	<div className="flex justify-between items-center py-2">
		<p>{item.title}</p>
		<div className="flex">
			<img 
				src="/images/icons/checkmark-circle-outline.svg" 
				alt="check icon"
				className="w-6 md:w-8 cursor-pointer mr-3 transition-all duration-150 ease-out hover:ease-in hover:w-8 md:hover:w-10 hover:opacity-70"
			/>
			<img 
				src="/images/icons/trash-outline.svg" 
				alt="check icon"
				className="w-6 md:w-8 cursor-pointer transition-all duration-150 ease-out hover:ease-in hover:w-8 md:hover:w-10 hover:opacity-70"
			/>
		</div>
	</div>
	)
}

export default ToDoItem