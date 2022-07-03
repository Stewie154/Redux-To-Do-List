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
	<form className="absolute top-0 left-0 flex justify-center items-center rounded-lg border border-color-secondary h-full w-full" onSubmit={(e) => handleSubmit(e, nameDisplay)}>
		<input 
			className="max-w-full container-background-color text-3xl md:text-5xl py-5 focus:outline-0"
			type="text" 
			onChange={(event) => handleChange(event)}
			placeholder="Enter your first name..."
			ref={textInput}
		/>
	</form>
	)
}

export default EnterNameModal