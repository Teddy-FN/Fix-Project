import { combineReducers } from 'redux'
import { USER_LOG_OUT_SUCCESS } from '../actions/types'
import AuthReducer from './auth'
import profileUser from './User'

const combinedReducer = combineReducers({
    AuthReducer,
    profileUser
});

const rootReducer = (state, action) => {
    if (action.type === USER_LOG_OUT_SUCCESS) {
        state = undefined;
    }
    return combinedReducer(state, action);
}
export default rootReducer;