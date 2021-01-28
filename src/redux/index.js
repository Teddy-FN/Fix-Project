import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
// import Sagas from './sagas/auth'

// const sagaMiddleWare = createSagaMiddleWare()

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(ReduxThunk)) // Connect to extension browser
)
// sagaMiddleWare.run(Sagas)

export default store;