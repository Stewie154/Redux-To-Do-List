import React from 'react'
import { useSelector } from 'react-redux'

const ToDoForm = () => {

	const currentText = useSelector(state => state.currentText)
	const handleChange = (value) => {
		console.log(value)
	}
	return (
		<form className="absolute bottom-0 left-0 w-full py-8 px-4 flex justify-between items-between border-t border-color-secondary">
			<input 
				type="text" 
				
				placeholder="Enter to do task..." 
				className="w-9/12 bg-transparent border-0 text-lg md:text-2xl focus:outline-0" 
				onChange={ (e) => { handleChange(e.target.value) } }
			/>
			<button className="border border-color-secondary py-2 px-4 rounded-lg transition-all duration-75 ease-out hover:ease-in hover:opacity-70">
				Add Task
			</button>
		</form>
	)
}

export default ToDoForm