import React from 'react'
import EnterNameModal from '../enter-name-modal/EnterNameModal'
import { setUserName } from '../../redux/actions/user'
import { useSelector, useDispatch } from 'react-redux'
import Fade from 'react-reveal/Fade';


const Header = () => {
	const userName = useSelector(state => state.userName)
	const dispatch = useDispatch()

	const openModal = () => {
		dispatch(setUserName(''))
	}

	const header = (
		<Fade>
			<h1 className="py-5 md:py-10 text-lg md:text-4xl text-center underline cursor-pointer hover:text-xl md:hover:text-5xl header-hover transition-all" onClick={openModal}>
				{userName}'s list application
			</h1>
		</Fade>
	)

	const renderContent = userName === '' ? <EnterNameModal /> : header

	return (
		<>
			{renderContent}
		</>
	)
}

export default Header