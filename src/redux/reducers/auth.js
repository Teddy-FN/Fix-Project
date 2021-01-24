import {
    USER_LOG_IN,
    USER_LOG_IN_SUCCESS,
    USER_LOG_IN_FAILURE,
    USER_LOG_OUT,
    USER_LOG_OUT_SUCCESS,
    USER_LOG_OUT_FAILURE,
    USER_CONFIRM,
    USER_CONFIRM_SUCCESS,
    USER_CONFIRM_FAILURE,
    USER_RESET_PASSWORD_REQUEST,
    USER_RESET_PASSWORD_REQUEST_SUCCESS,
    USER_RESET_PASSWORD_REQUEST_FAILURE,
    USER_VALIDATE_TOKEN,
    USER_VALIDATE_TOKEN_SUCCESS,
    USER_VALIDATE_TOKEN_FAILURE,
    USER_RESET_PASSWORD,
    USER_RESET_PASSWORD_SUCCESS,
    USER_RESET_PASSWORD_FAILURE,
} from '../actions/types'


// State 
const initialState = {
    data: [],
    loading: false,
    success: false,
    error: []
}

// Reducer 
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOG_IN:
            return {
                ...state,
                data: action.data,
                loading: true,
                success: false,
                error: []
            }
        case USER_LOG_IN_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
                success: true,
                error: []
            }
        case USER_LOG_IN_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                success: false,
                error: action.error
            }
        case USER_CONFIRM:
            return {
                ...state,
                data: action.data,
                loading: true,
                success: false,
                error: null
            }
        case USER_CONFIRM_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
                success: true,
                error: null
            }
        case USER_CONFIRM_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                success: false,
                error: action.error
            }
        case USER_RESET_PASSWORD_REQUEST:
            return {
                ...state,
                data: action.data,
                loading: true,
                success: false,
                error: []
            }
        case USER_RESET_PASSWORD_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
                success: true,
                error: []
            }
        case USER_RESET_PASSWORD_REQUEST_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                success: false,
                error: action.error
            }
        case USER_VALIDATE_TOKEN:
            return {
                ...state,
                data: action.data,
                loading: true,
                success: false,
                error: null
            }
        case USER_VALIDATE_TOKEN_SUCCESS:
            return {
                ...state,
                data: [],
                loading: false,
                success: true,
                error: null
            }
        case USER_VALIDATE_TOKEN_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                success: false,
                error: action.error
            }
        case USER_RESET_PASSWORD:
            return {
                ...state,
                data: action.data,
                loading: true,
                success: false,
                erorr: null
            }
        case USER_RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                data: [],
                loading: false,
                success: true,
                erorr: null
            }
        case USER_RESET_PASSWORD_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                success: false,
                error: action.error
            }
        case USER_LOG_OUT:
            return {
                ...state,
                erorr: []
            }
        case USER_LOG_OUT_SUCCESS:
            return {
                ...state,
                data: [],
                error: []
            }
        case USER_LOG_OUT_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                success: false,
                error: action.error
            }
        default:
            return state;
    }
}   