import React from 'react'
import Fade from 'react-reveal/Fade';
import { useSelector, useDispatch } from 'react-redux'
import { toggleListsModal } from '../../../redux/actions/listsModal'


const ClearAllListsButton = () => {

	const dispatch = useDispatch()
	const lists = useSelector(state => state.lists)
	const userName = useSelector(state => state.username)

	const handleClearAllClick = () => {
		dispatch(toggleListsModal())
	}

	return (
		<Fade top duration={850}>
			<p
				className={`${lists.length > 1 & userName !== '' ? 'w-fit ml-auto italic opacity-90 tracking-wider text-right cursor-pointer hover:opacity-50 hover:underline' : 'hidden'}`}
				onClick={() => handleClearAllClick()}
			>
				Clear all lists
			</p>
		</Fade>

	)
}

export default ClearAllListsButton