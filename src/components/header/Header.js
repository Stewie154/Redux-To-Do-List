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
            <h1 className="h-[20%] flex justify-center items-center text-3xl md:text-6xl underline cursor-pointer" onClick={openModal}>
                {userName}'s To Do List
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