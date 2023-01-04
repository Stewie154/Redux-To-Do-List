import React from 'react'
import EnterNameModal from '../enter-name-modal/EnterNameModal'
import { setUserName } from '../../redux/actions/user'
import { useSelector, useDispatch } from 'react-redux'
import Fade from 'react-reveal/Fade';


const Header = () => {
	const userName = useSelector(state => state.userName)
	const selectedList = useSelector(state => state.selectedList)
	const dispatch = useDispatch()

	const openModal = () => {
		dispatch(setUserName(''))
	}

	const text = selectedList === null ? <>{userName}'s list application</> : <>{selectedList.title}</>

	const header = (
		<Fade>
			<h1 className="h-[20%] flex justify-center items-center md:py-10 text-2xl md:text-4xl text-center underline cursor-pointer hover:text-3xl md:hover:text-5xl header-hover transition-all" onClick={openModal}>
				{text}
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