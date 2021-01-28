import { combineReducers } from 'redux'
import { USER_LOG_OUT_SUCCESS } from '../actions/types'
import AuthReducer from './auth'

const combinedReducer = combineReducers({
    AuthReducer
});

const rootReducer = (state, action) => {
    if (action.type === USER_LOG_OUT_SUCCESS) {
        // clear everything but keep the stuff we want to be preserved ..
        state = undefined;
    }
    return combinedReducer(state, action);
}
export default rootReducer;