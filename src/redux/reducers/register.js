import {
    USER_SIGNUP,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
} from '../actions/types'

const initialState = {
    data: {
        fullname: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    },
    error: [],
    loading: false,
    success: false
}


export default function SignUp(state = initialState, action) {
    switch (type.action) {
        case USER_SIGNUP:
            return {
                ...state,
                data: {
                    fullname: action.fullname,
                    email: action.email,
                    password: action.password,
                    passwordConfirmation: action.passwordConfirmation
                },
                loading: true,
                success: false,
                error: []
            }
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                data: {
                    fullname: action.fullname,
                    email: action.email,
                    password: action.password,
                    passwordConfirmation: action.passwordConfirmation
                },
                error: false,
                loading: false,
                success: true
            }
        case USER_SIGNUP_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                success: false,
                error: action.error
            }
    }
}