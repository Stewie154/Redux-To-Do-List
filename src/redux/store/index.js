import { createStore, applyMiddleware, compose } from "redux"
import combinedReducers from '../reducers/index'
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'


const persistConfig = {
	key: 'root',
	storage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, combinedReducers)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware()))

const Persister = persistStore(store)

export {store, Persister}
