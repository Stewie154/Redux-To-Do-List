import React from 'react'
import { useSelector } from 'react-redux'

const EnterNameModal = () => {
	const userName = useSelector(state => state.userName)

	const handleChange = (event) => {
		console.log(event.target.value)
	}

	return (
	<form>
		<input type="text" value={userName} onChange={(event) => handleChange(event)}/>
	</form>
	)
}

export default EnterNameModal