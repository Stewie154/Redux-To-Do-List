import React from 'react'
import EnterNameModal from '../enter-name-modal/EnterNameModal'
import { setUserName } from '../../redux/actions/user'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
	const userName = useSelector(state => state.userName)

	return (
		<h1 className="h-[20%] flex justify-center items-center text-3xl md:text-6xl underline ">Stewart's To Do List</h1>
	)
}

export default Header