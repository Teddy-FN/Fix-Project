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

// export const userConfirm = data => {
//     return {
//         type: USER_CONFIRM,
//         data
//     }
// }

// export const userConfirmSuccess = data => {
//     return {
//         type: USER_CONFIRM_SUCCESS, data
//     }
// }

// export const userConfirmFailure = error => {
//     return {
//         type: USER_CONFIRM_FAILURE,
//         error
//     }
// }

// export const userResetPasswordRequest = data => {
//     return {
//         type: USER_RESET_PASSWORD_REQUEST, data
//     }
// }

// export const userResetPasswordRequestSuccess = data => {
//     return {
//         type: USER_RESET_PASSWORD_REQUEST_SUCCESS, data
//     }
// }

// export const userResetPasswordRequestFailure = error => {
//     return {
//         type: USER_RESET_PASSWORD_REQUEST_FAILURE, error
//     }
// }

// export const userValidateToken = data => {
//     return {
//         type: USER_VALIDATE_TOKEN, data
//     }
// }

// export const userValidateTokenSuccess = data => {
//     return {
//         type: USER_VALIDATE_TOKEN_SUCCESS, data
//     }
// }

// export const userValidateTokenFailure = error => {
//     return {
//         type: USER_VALIDATE_TOKEN_FAILURE, error
//     }
// }

// export const resetPassword = data => {
//     return {
//         type: USER_RESET_PASSWORD, data
//     }
// }

// export const resetPasswordSuccess = data => {
//     return {
//         type: USER_RESET_PASSWORD_SUCCESS, data
//     }
// }

// export const userResetPasswordFailure = error => {
//     return {
//         type: USER_RESET_PASSWORD_FAILURE, error
//     }
