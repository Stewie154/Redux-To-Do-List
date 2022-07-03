import { createStore, applyMiddleware } from "redux"
import combinedReducers from '../reducers/index'
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, combinedReducers)

const store = createStore(persistedReducer, applyMiddleware())

const Persister = persistStore(store)

export {store, Persister}

// export default createStore(
//     persistedReducer, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )