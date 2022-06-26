import { render } from '@testing-library/react'
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
		<>
			{renderList}
		</>
	)
}

export default ToDoList