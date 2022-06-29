import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserName } from '../../redux/actions/user'


const EnterNameModal = () => {
	const dispatch = useDispatch()
	const userName = useSelector(state => state.userName)
	const textInput = useRef(null)


	let nameDisplay = ''

	const handleChange = (event) => {
		nameDisplay = event.target.value
	}

	const handleSubmit = (userName) => {
		dispatch(setUserName(userName))
	}

	useEffect(() => {
		textInput.current.focus()
	}, [])

	return (
	<form className="absolute top-0 left-0 flex justify-center items-center rounded-lg border border-color-secondary h-full w-full" onSubmit={() => handleSubmit(nameDisplay)}>
		<input 
			className="container-background-color text-5xl py-5 focus:outline-0"
			type="text" 
			onChange={(event) => handleChange(event)}
			placeholder="Enter your first name..."
			ref={textInput}
		/>
	</form>
	)
}

export default EnterNameModal