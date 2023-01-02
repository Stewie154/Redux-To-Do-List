import React from 'react'
import '../../index.css'
import '../../styles/global.scss'
import Fade from 'react-reveal/Fade';

import SelectedList from '../selected-list/SelectedList'
import AllLists from '../all-lists/AllLists';


const App = () => {
	return (
		<div className="background-primary w-screen h-screen flex justify-center items-center">
			<Fade top duration={750}>
				<main className="flex flex-col relative container-background-color w-[750px] max-w-[90%] h-[700px] max-h-[95vh] px-5 md:px-10 mx-auto border border-color-secondary rounded-lg text-center">
					{/* when state is ready, use ternary to render AllLists when no list is selected  */}
					<AllLists />
					<SelectedList />
				</main>
			</Fade>
		</div>
	)
}

export default App