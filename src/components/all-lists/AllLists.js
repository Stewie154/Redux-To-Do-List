import React from 'react'
import ListItem from '../list-item/ListItem'

const AllLists = () => {
	return (
		<div>All Lists component here:
			<ListItem title="list item here" id={1}/>
			<ListItem title="list item here" id={2}/>
			<ListItem title="list item here" id={3}/>
		</div>
	)
}

export default AllLists