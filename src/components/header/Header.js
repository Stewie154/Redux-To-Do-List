import React from 'react'
import EnterNameModal from '../enter-name-modal/EnterNameModal'
import ClearAllListsButton from '../buttons/clear-all-lists-button/ClearAllListsButton'
import ClearListButton from '../buttons/clear-list-button/ClearListButton'
import { setUserName } from '../../redux/actions/user'
import { updateList } from '../../redux/actions/lists'
import { deselectList } from '../../redux/actions/selectedList'
import { useSelector, useDispatch } from 'react-redux'
import Fade from 'react-reveal/Fade';


const Header = () => {
	const userName = useSelector(state => state.userName)
	const selectedList = useSelector(state => state.selectedList)
	const dispatch = useDispatch()

	const openModal = () => {
		if (selectedList === null) {
			dispatch(setUserName(''))
		}
	}

	const text = selectedList === null ? <>{userName}'s list application</> : <>{selectedList.title}</>

	const handleBackClick = () => {
		dispatch(updateList(selectedList))
		dispatch(deselectList())
	}

	const renderBackAndClearButtons = (
		<section className="w-full flex justify-between items-center">
			<div className="flex items-center flex-grow cursor-pointer hover:opacity-60 hover:underline transition-all" onClick={() => handleBackClick()}>
				<img src="/images/icons/arrow-back-outline.svg" className="mr-4 w-7"/>
				<p>Back to my lists</p>
			</div>
			{selectedList && <ClearListButton />}
		</section>
	)

	const header = (
		<Fade>
			<header className="h-[20%] flex flex-col justify-evenly items-center">
				<h1 
					className={`text-2xl md:text-4xl text-center underline transition-all ${selectedList === null && 'cursor-pointer hover:text-3xl md:hover:text-5xl header-hover'}`} 
					onClick={openModal}
				>
					{text}
				</h1>
				{selectedList !== null ? renderBackAndClearButtons : <ClearAllListsButton />}
			</header>
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