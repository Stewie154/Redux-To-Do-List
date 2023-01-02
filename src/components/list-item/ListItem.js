import React from 'react'
import Fade from 'react-reveal/Fade';


const ListItem = ({ title, id }) => {
	return (
		<Fade top duration={500}>
			<div className="flex justify-between items-center py-2">
				<p className={`text-lg text-left max-w-[70%] sm:max-w-full md:text-2xl 'hover:opacity-80 cursor-pointer`} onClick={() => console.log(title)}>
					{title}
				</p>
				<div className="flex">
					<img
						src="/images/icons/pencil.svg"
						alt="check icon"
						className="w-6 md:w-8 cursor-pointer mr-3 transition-all duration-150 ease-out hover:ease-in hover:w-8 md:hover:w-10 hover:opacity-70"
						onClick={() => console.log(id)}
					/>
					<img
						src="/images/icons/trash-outline.svg"
						alt="trash icon"
						className="w-6 md:w-8 cursor-pointer transition-all duration-150 ease-out hover:ease-in hover:w-8 md:hover:w-10 hover:opacity-70"
						onClick={() => console.log(id)}
					/>
				</div>
			</div>
		</Fade>
	)
}

export default ListItem