import {
    USER_LOG_IN,
    USER_LOG_IN_SUCCESS,
    USER_LOG_IN_FAILURE,
    USER_SIGNUP,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
    USER_LOG_OUT,
    USER_LOG_OUT_SUCCESS,
    USER_LOG_OUT_FAILURE,
} from './types'

export const userLogin = payload => {
    return {
        type: USER_LOG_IN,
        payload
    }
}

export const userLoginSuccess = payload => {
    return {
        type: USER_LOG_IN_SUCCESS,
        payload
    }
}

export const userLoginFailure = error => {
    return {
        type: USER_LOG_IN_FAILURE,
        error
    }
}

export const userLogOut = () => {
    return {
        type: USER_LOG_OUT
    }
}

export const userLogOutSuccess = () => ({
    type: USER_LOG_OUT_SUCCESS
})

export const userLogOutFailure = error => {
    return {
        type: USER_LOG_OUT_FAILURE, error
    }
}

export const userSignup = payload => {
    return {
        type: USER_SIGNUP,
        payload
    }
}

export const userSignupSuccess = payload => {
    return {
        type: USER_SIGNUP_SUCCESS,
        payload
    }
}

export const userSignupFailure = error => {
    return {
        type: USER_SIGNUP_FAILURE,
        error
    }
}