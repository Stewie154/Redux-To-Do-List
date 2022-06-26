import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateText } from '../../redux/actions/toDoForm'
import { createToDo } from '../../redux/actions/toDos'

const ToDoForm = () => {

	const currentText = useSelector(state => state.currentText)
	const dispatch = useDispatch()

	const handleChange = (textValue) => {
		dispatch(updateText(textValue))
	}

	const handleSubmit = (event, currentText) => {
		event.preventDefault()
		let newToDoItem = { id: Date.now(), title: currentText, completed: false }
		dispatch(createToDo(newToDoItem))
		dispatch(updateText(''))
		console.log(newToDoItem)
	}

	return (
		<form 
			className="absolute bottom-0 left-0 w-full py-8 px-4 flex justify-between items-between border-t border-color-secondary"
			onSubmit={(event) => handleSubmit(event, currentText)}
		>
			<input 
				type="text" 
				value={currentText}
				placeholder="Enter to do task..." 
				className="w-9/12 bg-transparent border-0 text-lg md:text-2xl focus:outline-0" 
				onChange={ (e) => { handleChange(e.target.value) } }
			/>
			<button type="submit" className="border border-color-secondary py-2 px-4 rounded-lg transition-all duration-75 ease-out hover:ease-in hover:opacity-70">
				Add Task
			</button>
		</form>
	)
}

export default ToDoForm