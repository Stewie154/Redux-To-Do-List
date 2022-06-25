import { createStore, compose } from "redux";
import combinedReducers from '../reducers/index'

export default createStore(
    combinedReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)