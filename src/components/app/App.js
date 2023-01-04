import React from 'react'
import '../../index.css'
import '../../styles/global.scss'
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';

import SelectedList from '../selected-list/SelectedList'
import AllLists from '../all-lists/AllLists';
import { listIsSelected } from '../../utilities/functions'


const App = () => {

	const lists = useSelector(state => state.lists)

	const selectedList = listIsSelected(lists)

	const renderContent = () => {
		return selectedList === true ? <SelectedList /> : <AllLists />
	}

	return (
		<div className="background-primary w-screen h-screen flex justify-center items-center">
			<Fade top duration={750}>
				<main className="flex flex-col relative container-background-color w-[750px] max-w-[90%] h-[700px] max-h-[95vh] px-5 md:px-10 mx-auto border border-color-secondary rounded-lg text-center">
					{renderContent()}
				</main>
			</Fade>
		</div>
	)
}

export default App