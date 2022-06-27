import React from 'react'
import '../../index.css'
import '../../styles/global.scss'

import Header from '../header/Header'
import ToDoList from '../to-do-list/ToDoList'
import ToDoForm from '../to-do-form/ToDoForm'


const App = () => {
	return (
		<div className="background-primary w-screen h-screen flex justify-center items-center">
			<main className="relative container-background-color w-[750px] max-w-[90%] h-[700px] pt-10 px-5 md:pt-20 md:px-10 mx-auto border border-color-secondary rounded-lg text-center">
				<Header />
				<ToDoList/>
				<ToDoForm />
			</main>	
		</div>
	)
}

export default App