import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListItem from '../list-item/ListItem'

const AllLists = () => {

	const dispatch = useDispatch()

	const lists = useSelector(state => state.lists)

	console.log(lists)
	return (
		<div>All Lists component here:
			<ListItem title="list item here" id={1}/>
			<ListItem title="list item here" id={2}/>
			<ListItem title="list item here" id={3}/>
		</div>
	)
}

export default AllLists