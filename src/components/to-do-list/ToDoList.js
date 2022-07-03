import React from 'react'
import { useSelector } from 'react-redux'

import ToDoItem from '../to-do-item/ToDoItem'

const ToDoList = () => {
	const allToDos = useSelector(state => state.toDos)
    const userName = useSelector(state => state.userName)
	const renderList = allToDos.map((item, key) => {
		return (
			<ToDoItem item={item} key={key}/>
		)
	})
	return (
		<div className={`h-[60%] overflow-scroll ${userName === '' && 'hidden'}`}>
			{renderList}
		</div>
	)
}

export default ToDoList