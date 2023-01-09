import React from 'react'
import { useDispatch } from 'react-redux'
import { selectListItem } from '../../redux/actions/selectedListItem'
import { deleteListItem, toggleListItem } from '../../redux/actions/selectedList'
import Fade from 'react-reveal/Fade';



const ListItem = ({ item }) => {
	const dispatch = useDispatch()

	const handleDelete = (id) => {
		dispatch(deleteListItem(id))
	}

	const toggleComplete = (id) => {
		dispatch(toggleListItem(id))
	}

	const editListItem = (listItem) => {
		if (listItem.completed === false) {
			dispatch(selectListItem(listItem))
		}
	}

	let icon = item.completed ? '/images/icons/arrow-undo-outline.svg' : '/images/icons/checkmark-circle-outline.svg'

	return (
		<Fade top duration={500}>
			<div className="flex justify-between items-center py-2">
				<p className={`text-lg text-left max-w-[70%] sm:max-w-full md:text-2xl ${!item.completed && 'hover:opacity-80 cursor-pointer'} ${item.completed && 'line-through opacity-20'}`} onClick={() => editListItem(item)}>
					{item.title}
				</p>
				<div className="flex">
					<img
						src={icon}
						alt="check icon"
						className="w-6 md:w-8 cursor-pointer mr-3 transition-all duration-150 ease-out hover:ease-in hover:opacity-70"
						onClick={() => toggleComplete(item.id)}
					/>
					<img
						src="/images/icons/trash-outline.svg"
						alt="trash icon"
						className="w-6 md:w-8 cursor-pointer transition-all duration-150 ease-out hover:ease-in hover:opacity-70"
						onClick={() => handleDelete(item.id)}
					/>
				</div>
			</div>
		</Fade>

	)
}

export default ListItem