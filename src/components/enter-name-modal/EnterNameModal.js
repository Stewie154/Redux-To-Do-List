import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUserName } from '../../redux/actions/user'


const EnterNameModal = () => {
	const dispatch = useDispatch()
	const textInput = useRef(null)


	let nameDisplay = ''

	const handleChange = (event) => {
		nameDisplay = event.target.value
	}

	const handleSubmit = (event, userName) => {
        event.preventDefault()
        if (userName !== '') {
            dispatch(setUserName(userName))
        }
	}

	useEffect(() => {
		textInput.current.focus()	
	}, [])

	return (
	<form className="absolute top-0 left-0 flex flex-col justify-center items-center rounded-lg h-full w-full" onSubmit={(e) => handleSubmit(e, nameDisplay)}>
		<input 
			className="max-w-full px-3 md:px-0 mb-10 container-background-color text-center text-3xl md:text-5xl py-5 focus:outline-0"
			type="text" 
			onChange={(event) => handleChange(event)}
			placeholder="Enter your first name..."
			ref={textInput}
		/>
        <button type="submit" className="self-center border border-color-secondary py-2 px-4 rounded-lg transition-all duration-75 ease-out hover:ease-in hover:opacity-70">
			Add name
        </button>
	</form>
	)
}

export default EnterNameModal