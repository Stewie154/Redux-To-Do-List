import React from 'react'

const ToDoItem = ({ item }) => {
	return (
	<div className="flex justify-between">
		<p>{item.title}</p>
		<div className="flex">
			<img 
				src="/images/icons/checkmark-circle-outline.svg" 
				alt="check icon"
				className="w-6"
			/>
		</div>
	</div>
	)
}

export default ToDoItem