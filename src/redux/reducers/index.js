import { combineReducers } from 'redux'
import { USER_LOG_OUT_SUCCESS } from '../actions/types'
import AuthReducer from './auth'
import profileUser from './User'
import AdminReducer from './admin'
import BookingReducer from './booking'
import GoogleLogin from './googleLogin'
import BookedTimeSlot from './bookTimeSlot'

const combinedReducer = combineReducers({
    AuthReducer,
    profileUser,
    AdminReducer,
    BookingReducer,
    GoogleLogin,
    BookedTimeSlot
});

const rootReducer = (state, action) => {
    if (action.type === USER_LOG_OUT_SUCCESS) {
        state = undefined;
    }
    return combinedReducer(state, action);
}
export default rootReducer;