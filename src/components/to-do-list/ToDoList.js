import React from 'react'
import { useSelector } from 'react-redux'

const ToDoList = () => {
	const allToDos = useSelector(state => state.toDos)
	console.log(allToDos)

	return (
		<div>ToDoList</div>
	)
}

export default ToDoList