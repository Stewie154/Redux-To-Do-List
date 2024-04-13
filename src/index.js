import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, Persister } from "./redux/store";
import { store as toolkitStore } from "./redux-toolkit/store/store";
import { PersistGate } from "redux-persist/integration/react";

import App from "./components/app/App";

//uses vaniliia redux

// ReactDOM.render(
//     <Provider store={store}>
//         <PersistGate loading={<div>Loading...</div>} persistor={Persister}>
//             <App/>
//         </PersistGate>
//     </Provider>, document.querySelector('#root')
// )

//uses redux toolkit

ReactDOM.render(
	<Provider store={toolkitStore}>
		<App />
	</Provider>,
	document.querySelector("#root"),
);
