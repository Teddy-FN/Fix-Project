/* eslint-disable no-dupe-keys */
import {
    USER_LOG_IN_GOOGLE,
    USER_LOG_IN_GOOGLE_SUCCESS,
    USER_LOG_IN_GOOGLE_FAILURE
} from '../../redux/actions/types'

const initialState = {
    isLoading: false,
    isLogged: false,
    error: false,
    data: []
}

export default function GoogleLogin(state = initialState, action) {
    switch (action.type) {
        case USER_LOG_IN_GOOGLE:
            return {
                ...state,
                isLoading: true,
                isLoggedIn: true,
                error: false,
                data: action.payload
            }
        case USER_LOG_IN_GOOGLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                error: false,
                data: action.payload
            }
        case USER_LOG_IN_GOOGLE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isLoading: false,
                error: true,
            }
        }
        default:
            return { ...state };
    }
}