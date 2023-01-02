
# Overall plan

To do list to be generated with create-react-app and state to be managed with redux. This is a project to get some practice using redux outside of courses.

* State management to be controlled in redux, install react-redux to use with create-react-app
* Styling to be done with tailwind css
* Add some animations in when project is finished, needs to look good on all screens.
* Add a modal on initial page load asking for the user’s name, title then says ‘NAME’s To Do List’
* Save users data in local storage so the name & to dos are still there on page refresh 
* Add animations for todos & container on page load

## My Implementation

* Step 1:
	* Create github repo
	* Generate a project with create-react-app (and install tailwind css)
	* Delete boilerplate code & render something from the App component 
	* Install redux & react-redux
		* Create actions folder with index file
		* Create reducers folder with index file
		* Create store by passing in imported combined reducers
		* Wrap App component with Provider and pass in store
	* Choose a font and install it in project
	* Create a header component 
	* Create ToDo component 
	* Initialise state with 3 random toDos 
	* Retrieve the initial todos from the redux store and log them to the console
	* Map through todos from redux store and render ToDos components in ToDoList component 
	* Style ToDo component
		* Add trash and tick icons
		* Line through text when to do is completed

* Step 2:
	* Create a form component for creating a too
	* Save the inputted text to redux store on every keystroke 
	* On submit button click, dispatch an action to create a new to-do an update the to-do tasks in the redux store
	* Get new to do task added to the screen
	* Clear text from input box when to do is submitted
	* Stop to-do item from being created if form input is empty
	* Auto focus so you don’t have to click on the input to begin type to-do task
	* Fix styles so only to do list scrolls, and it goes behind the form in stacking order
	* Make the scroll point at the border top of the form at the bottom of the container (when lots of to-do items present)
	* Hitting enter key to submit to-do task

* Step 3:
	* Clicking tick icon dispatches edit to do action and toggles completed prop
	* Make sure styles for to do are updated on tick icon click
	* When to-do item is completed, change tick icon to an undo icon
	* Clicking trash icon dispatches delete to do action, removing it from the array
	* Make sure the to do is removed from the screen when trash icon is clicked

* Step 4:
	* Make container to fade in on page load
	* Make to do items fade in when created 
	* Add modal to get users name when page loads, store it in redux store and display in place of hard coded name
	* Style modal and add a label of ‘Enter your name’
	* After user submits their name, add allow them to re enter it by clicking on the name (hover feedback to let them know it’s clickable)
	* Make sure auto focus is on modal first, the automatically on to do input after name entry

* Step 5:
	* Store all data in local storage so to dos are still there after a page load (redux-persist)

* Step 6:
	* Create component for clear-to-dos modal
	* Add state to redux store for clearAllModalOpen
	* render component when state is clearAllModalOpen true
	* set clearAllModalOpen to true on 'Clear To-Do List' text click
	* Clear todos from store when 'yes' is clicked in modal, then toggle clearAllModalOpen
	* Close modal and keep don't clear to dos on modal 'no' button click

* Step 7: 
	* Create a component to display a list of to do lists (hard - coded html)
		* Need to display Create list button (like current 'add task' button)
		* add placeholder of 'enter list title eg "shopping"'
		* Create list button adds item to lists with pre entered name
		* clicking a list displays list as normal
			* move user name to top of container with smaller text
			* show list title where user name is currently
	* Add state to redux store for an array of lists
		* List to have:
			* title
			* id
			* selected (boolean)
			* items (array of current to do items)
	* Display pre built component with data from redux store
	* Add state to redux store for selected list
	* Add 'back / all lists' button opposite 'Clear To-Do list' button
	* Clicking the 'back / all lists' button to take user back to list of lists (deselect selected list)
	* Make sure user can create, read, update & delete new lists
	* Make sure original functionality works for individual list, (create, read update delete tasks)
	* Make sure all state remains in store on page refresh


## first time set up
`nvm use 14`
`npm install --force`

### Deployment

`vercel login`
`vercel --prod`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.





