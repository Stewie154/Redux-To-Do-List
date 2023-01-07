import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateText } from '../../redux/actions/createListForm'
import { createList } from '../../redux/actions/lists'
import { updateList } from '../../redux/actions/lists'
import { deselectListForTitleEdit } from '../../redux/actions/listEditingTitle'


const CreateListForm = () => {
	const dispatch = useDispatch()
	const currentListTitle = useSelector(state => state.currentListTitle)
	const userName = useSelector(state => state.userName)
	const listEditingTitle = useSelector(state => state.listEditingTitle)

	const textInput = useRef(null)

	useEffect(() => {
		textInput.current.focus()
	}, [textInput])

	useEffect(() => {
		if (listEditingTitle !== null) {
			dispatch(updateText(listEditingTitle.title))
			textInput.current.focus()
		}
	}, [listEditingTitle])

	const handleChange = (textValue) => {
		dispatch(updateText(textValue))
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		if (currentListTitle !== '' && listEditingTitle === null) {
			let newList = { 
				id: Date.now(), 
				title: currentListTitle, 
				items: []
			}
			dispatch(createList(newList))
			dispatch(updateText(''))
		}
		else {
			let updatedList = {...listEditingTitle, title: currentListTitle}
			dispatch(updateList(updatedList))
			dispatch(updateText(''))
			dispatch(deselectListForTitleEdit())
		}
	}

	return (
		<form
			className={`${userName === '' ? 'hidden' : 'absolute'} bottom-0 left-0 w-full h-[20%] px-5 md:px-10 flex justify-between items-between border-t rounded-b-lg border-color-secondary container-background-color`}
			onSubmit={(event) => handleSubmit(event)}
		>
			<input
				type="text"
				value={currentListTitle}
				placeholder="Create a new list..."
				className="w-9/12 bg-transparent border-0 text-lg md:text-2xl focus:outline-0"
				onChange={(e) => { handleChange(e.target.value) }}
				ref={textInput}
			/>
			<button type="submit" className="self-center border border-color-secondary py-2 px-4 rounded-lg transition-all duration-75 ease-out hover:ease-in hover:opacity-70">
				Create List
			</button>
		</form>
	)
}

export default CreateListForm