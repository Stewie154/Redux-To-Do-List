import React from 'react'
import { useSelector } from 'react-redux'

import ToDoItem from '../to-do-item/ToDoItem'

const ToDoList = () => {
	const allToDos = useSelector(state => state.toDos)
	const renderList = allToDos.map((item, key) => {
		return (
			<ToDoItem item={item} key={key}/>
		)
	})
	return (
		<div className="h-4/6 sm:h-3/4 overflow-scroll">
			{renderList}
		</div>
	)
}

export default ToDoList