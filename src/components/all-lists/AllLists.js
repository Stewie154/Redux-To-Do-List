import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../header/Header'
import ListItem from '../list-item/ListItem'

const AllLists = () => {

	const dispatch = useDispatch()

	const lists = useSelector(state => state.lists)

	const renderContent = () => {
		return lists.map(list => {
			return (
				<ListItem title={list.title} id={list.id} />
			)
		})
	}

	console.log(lists)
	return (
		<>
			<Header />
			{renderContent()}
		</>
	)
}

export default AllLists