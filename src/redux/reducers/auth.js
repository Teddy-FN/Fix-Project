import {
    USER_LOG_IN,
    USER_LOG_IN_SUCCESS,
    USER_LOG_IN_FAILURE,
    USER_LOG_OUT,
    USER_LOG_OUT_SUCCESS,
    USER_LOG_OUT_FAILURE,
    USER_SIGNUP,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
} from '../actions/types'


// State 
const initialState = {
    isLoading: false,
    isLoggedIn: false,
}

// Reducer 
export default function reducerAuth(state = initialState, action) {
    switch (action.type) {
        case USER_LOG_IN:
            return {
                ...state,
                ...action,
                isLoading: true
            }
        case USER_LOG_IN_SUCCESS:
            return {
                ...state,
                ...action,
                isLoggedIn: false,
                isLoading: false
            }
        case USER_LOG_IN_FAILURE:
            return {
                ...state,
                ...action,
                isLoading: false,
                isLoggedIn: false,
            }
        case USER_SIGNUP:
            return {
                ...state,
                ...action,
                isLoggedIn: true,
                isLoading: true
            }
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                ...action,
                isLoggedIn: false,
                isLoading: false
            }
        case USER_SIGNUP_FAILURE:
            return {
                ...state,
                ...action,
                isLoggedIn: false,
                isLoading: false,
            }
        case USER_LOG_OUT:
            return {
                ...state,
                ...action,
                isLoggedIn: true,
                isLoading: true
            }
        case USER_LOG_OUT_SUCCESS:
            return {
                ...state,
                ...action,
                isLoggedIn: false,
                isLoading: false,
            }
        case USER_LOG_OUT_FAILURE:
            return {
                ...state,
                data: [],
                isLoggedIn: false,
                isLoading: false,
            }
        default:
            return state;
    }
}   