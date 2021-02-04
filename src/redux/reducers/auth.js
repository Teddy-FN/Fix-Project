import {
    USER_LOG_IN_SUCCESS,
    USER_LOG_OUT_SUCCESS,
    USER_SIGNUP_SUCCESS,
} from '../actions/types'


// State 
const initialState = {
    isLoading: false,
    isLoggedIn: false,
    token: '',
}

// Reducer 
export default function reducerAuth(state = initialState, action) {
    switch (action.type) {
        case USER_LOG_IN_SUCCESS:
            return {
                ...state,
                // user : action.payload,
                isLoggedIn: true,
                token: action.payload
            }
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isLoggedIn: false,
                isLoading: false
            }
        case USER_LOG_OUT_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isLoggedIn: false,
                isLoading: false,
            }
        default:
            return state;
    }
} 