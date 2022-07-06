import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateText } from '../../redux/actions/toDoForm'
import { createToDo, editToDo } from '../../redux/actions/toDos'
import { deselectToDo } from '../../redux/actions/selectedToDo'

const ToDoForm = () => {
	const currentText = useSelector(state => state.currentText)
	const userName = useSelector(state => state.userName)
	const selectedToDo = useSelector(state => state.selectedToDo)

	const dispatch = useDispatch()

	const textInput = useRef(null)

	const handleChange = (textValue) => {
		dispatch(updateText(textValue))
	}

	const handleEditText = (selectedToDo) => {
		if (selectedToDo !== null) {
			dispatch(updateText(selectedToDo.title))
		}
	}

	const handleSubmit = (event, currentText, selectedToDo) => {
		event.preventDefault()
		if (currentText !== '' & selectedToDo === null) {
			let newToDoItem = { id: Date.now(), title: currentText, completed: false }
			dispatch(createToDo(newToDoItem))
			dispatch(updateText(''))
		}
		else {
			let data = {
				updatedText: currentText,
				selectedToDo: selectedToDo
			}
			dispatch(editToDo(data))
			dispatch(deselectToDo())
			dispatch(updateText(''))
		}
	}

	useEffect(() => {
		textInput.current.focus()
	}, [userName])

	useEffect(() => {
		handleEditText(selectedToDo)
	}, [selectedToDo])

	return (
		<form
			className={`${userName === '' && 'hidden'} absolute bottom-0 left-0 w-full h-[20%] px-5 md:px-10 flex justify-between items-between border-t rounded-b-lg border-color-secondary container-background-color`}
			onSubmit={(event) => handleSubmit(event, currentText, selectedToDo)}
		>
			<input
				type="text"
				value={currentText}
				placeholder="Enter to do task..."
				className="w-9/12 bg-transparent border-0 text-lg md:text-2xl focus:outline-0"
				onChange={(e) => { handleChange(e.target.value) }}
				ref={textInput}
			/>
			<button type="submit" className="self-center border border-color-secondary py-2 px-4 rounded-lg transition-all duration-75 ease-out hover:ease-in hover:opacity-70">
				Add Task
			</button>
		</form>
	)
}

export default ToDoForm