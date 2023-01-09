import React from 'react'
import Fade from 'react-reveal/Fade';
import { useSelector, useDispatch } from 'react-redux'
import { toggleListItemsModal } from '../../../redux/actions/clearListItemsModal'


const ClearListButton = () => {
	const dispatch = useDispatch()
	const selectedList = useSelector(state => state.selectedList)


	const handleToggleClearAllModal = () => {
		dispatch(toggleListItemsModal())
	}
	return (
		<Fade top duration={850}>
			<p
				className={`${selectedList.items.length < 2 ? 'hidden' : 'w-fit ml-auto italic opacity-90 tracking-wider text-right cursor-pointer hover:opacity-50 hover:underline'}`}
				onClick={() => handleToggleClearAllModal()}
			>
				Clear list
			</p>
		</Fade>
	)
}

export default ClearListButton