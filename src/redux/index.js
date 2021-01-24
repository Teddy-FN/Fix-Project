import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import Sagas from './sagas'

const sagaMiddleWare = createSagaMiddleWare()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare)) // Connect to extension browser
)
sagaMiddleWare.run(Sagas)

export default store