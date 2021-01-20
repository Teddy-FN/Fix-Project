import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers"
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import thunk from "redux-thunk"
import UserProfile from './reducers/userProfile'

export default createStore(
    combineReducers({
        UserProfile
    })
    ,
    applyMiddleware(
        logger(),
        promise()
    )
);



