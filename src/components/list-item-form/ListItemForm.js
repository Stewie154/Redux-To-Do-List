import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateText } from '../../redux/actions/listItemForm'
import { createListItem, editListItem } from '../../redux/actions/selectedList'
import { deselectListItem } from '../../redux/actions/selectedListItem'

const ListItemForm = () => {
	const currentTaskText = useSelector(state => state.currentTaskText)
	const userName = useSelector(state => state.userName)
	const selectedListItem = useSelector(state => state.selectedListItem)

	const dispatch = useDispatch()

	const textInput = useRef(null)

	const handleChange = (textValue) => {
		dispatch(updateText(textValue))
	}

	const handleEditText = (selectedListItem) => {
		if (selectedListItem !== null) {
			dispatch(updateText(selectedListItem.title))
			textInput.current.focus()
		}
	}

	const handleSubmit = (event, currentTaskText, selectedListItem) => {
		event.preventDefault()
		if (currentTaskText !== '' & selectedListItem === null) {
			let newListItem = { id: Date.now(), title: currentTaskText, completed: false }
			dispatch(createListItem(newListItem))
			dispatch(updateText(''))
		}
		else if (currentTaskText !== '') {
			let data = {
				updatedText: currentTaskText,
				selectedItem: selectedListItem
			}
			dispatch(editListItem(data))
			dispatch(deselectListItem())
			dispatch(updateText(''))
		}
	}

	useEffect(() => {
		if (window.innerWidth > 1024) {
			textInput.current.focus()
		}
	}, [userName])

	useEffect(() => {
		handleEditText(selectedListItem)
	}, [selectedListItem])

	return (
		<form
			className={`${userName === '' && 'hidden'} absolute bottom-0 left-0 w-full h-[20%] px-5 md:px-10 flex justify-between items-between border-t rounded-b-lg border-color-secondary container-background-color`}
			onSubmit={(event) => handleSubmit(event, currentTaskText, selectedListItem)}
		>
			<input
				type="text"
				value={currentTaskText}
				placeholder="Enter list item name..."
				className="w-9/12 bg-transparent border-0 text-lg md:text-2xl focus:outline-0"
				onChange={(e) => { handleChange(e.target.value) }}
				ref={textInput}
			/>
			<button type="submit" className="self-center border border-color-secondary py-2 px-4 rounded-lg transition-all duration-75 ease-out hover:ease-in hover:opacity-70">
				Add Item
			</button>
		</form>
	)
}

export default ListItemForm