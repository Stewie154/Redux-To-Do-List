import React from 'react'
import '../../index.css'
import '../../styles/global.scss'

import Header from '../header/Header'
import ToDoList from '../to-do-list/ToDoList'


const App = () => {
	return (
		<div className="background-primary w-screen h-screen flex justify-center items-center">
			<main className="container-background-color w-[750px] max-w-[90%] h-[700px] py-10 px-5 md:py-20 md:px-10  overflow-scroll mx-auto border-color-secondary rounded-lg text-center">
				<Header />
				<ToDoList/>
			</main>	
		</div>
	)
}

export default App