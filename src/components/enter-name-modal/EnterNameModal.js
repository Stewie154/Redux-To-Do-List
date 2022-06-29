import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserName } from '../../redux/actions/user'


const EnterNameModal = () => {
	const dispatch = useDispatch()
	const userName = useSelector(state => state.userName)

	let nameDisplay = ''

	const handleChange = (event) => {
		nameDisplay = event.target.value
	}

	const handleSubmit = (userName) => {
		dispatch(setUserName(userName))
	}

	return (
	<form className="text-black" onSubmit={() => handleSubmit(nameDisplay)}>
		<input type="text" onChange={(event) => handleChange(event)}/>
	</form>
	)
}

export default EnterNameModal