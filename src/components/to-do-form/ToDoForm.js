import React from 'react'

const ToDoForm = () => {
	return (
		<form className="absolute bottom-0 left-0 w-full py-8 px-4 border-t border-color-secondary">
			<input 
				type="text" 
				placeholder="Enter to do task..." 
				className="w-full bg-transparent border-0 text-lg md:text-2xl focus:outline-0" 
			/>
		</form>
	)
}

export default ToDoForm