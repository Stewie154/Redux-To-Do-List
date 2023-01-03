import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateText } from '../../redux/actions/createListForm'

const CreateListForm = () => {
	const dispatch = useDispatch()
	const currentListTitle = useSelector(state => state.currentListTitle)

	const textInput = useRef(null)

	useEffect(() => {
		textInput.current.focus()
	}, [textInput])

	const handleChange = (textValue) => {
		dispatch(updateText(textValue))
	}

	return (
		<form
			className={`absolute bottom-0 left-0 w-full h-[20%] px-5 md:px-10 flex justify-between items-between border-t rounded-b-lg border-color-secondary container-background-color`}
			onSubmit={(event) => console.log(event)}
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