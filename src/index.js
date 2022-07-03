import React from 'react'
import  ReactDOM  from 'react-dom'
import { Provider } from 'react-redux'
import  {store, Persister} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import App from './components/app/App'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={Persister}>
            <App/>
        </PersistGate>
    </Provider>, document.querySelector('#root')
)