import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../header/Header'
import ListItem from '../list-item/ListItem'
import CreateListForm from '../create-list-form/CreateListForm'

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
			<main className="h-[60%] overflow-scroll">
				{renderContent()}
			</main>
			<CreateListForm />
		</>
	)
}

export default AllLists