import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../header/Header'
import ListItem from '../list-item/ListItem'

const AllLists = () => {

	const dispatch = useDispatch()
	const userName = useSelector(state => state.userName)

	const lists = useSelector(state => state.lists)

	const renderContent = () => {
		if (userName !== '') {
			return lists.map(list => {
				return (
					<ListItem key={list.id} title={list.title} id={list.id} />
				)
			})
		}
	}

	return (
		<>
			<Header />
			{renderContent()}
		</>
	)
}

export default AllLists