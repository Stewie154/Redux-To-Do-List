import React from 'react'
import { fetchAllToDos } from '../../redux/actions/toDos'
import { useSelector } from 'react-redux'

const ToDoList = () => {
	const allToDos = useSelector(state => state.toDos)
	console.log(allToDos)

	return (
		<div>ToDoList</div>
	)
}

export default ToDoList