import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteToDo, toggleToDo } from '../../redux/actions/toDos'


const ToDoItem = ({ item }) => {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteToDo(id))
    }

    const toggleComplete = (id) => {
        dispatch(toggleToDo(id))
    }

	return (
	<div className="flex justify-between items-center py-2">
		<p className={`text-lg md:text-2xl ${item.completed && 'line-through opacity-20'}`}>{item.title}</p>
		<div className="flex">
			<img 
				src={item.completed ? '/images/icons/arrow-undo-outline.svg' : '/images/icons/checkmark-circle-outline.svg'}
				alt="check icon"
				className="w-6 md:w-8 cursor-pointer mr-3 transition-all duration-150 ease-out hover:ease-in hover:w-8 md:hover:w-10 hover:opacity-70"
                onClick={() => toggleComplete(item.id)}
			/>
			<img 
				src="/images/icons/trash-outline.svg" 
				alt="trash icon"
				className="w-6 md:w-8 cursor-pointer transition-all duration-150 ease-out hover:ease-in hover:w-8 md:hover:w-10 hover:opacity-70"
                onClick={() => handleDelete(item.id)}
			/>
		</div>
	</div>
	)
}

export default ToDoItem