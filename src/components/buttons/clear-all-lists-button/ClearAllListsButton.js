import React from 'react'
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
			<p 
				className={`${lists.length > 1 & userName !== '' ? 'w-fit ml-auto pb-2.5 italic opacity-90 tracking-wider text-right cursor-pointer hover:opacity-50 hover:underline' : 'hidden'}`}
				onClick={() => handleClearAllClick()}
			>
				Clear all lists
			</p>
	)
}

export default ClearAllListsButton