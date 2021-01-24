import API from '../api/auth'
import {
    USER_LOG_IN,
    USER_LOG_OUT,
    USER_SIGNUP,
    USER_CONFIRM,
    USER_RESET_PASSWORD_REQUEST,
    USER_VALIDATE_TOKEN,
    USER_RESET_PASSWORD,
} from '../actions/types';

import {
    userLogin, userLoginSuccess, userLoginFailure,
    userLogOut, userLogOutSuccess, userLogOutFailure,
    userSignup, userSignupSuccess, userSignupFailure,
    userConfirm, userConfirmSuccess, userConfirmFailure,
    userResetPasswordRequest, userResetPasswordRequestSuccess, userResetPasswordRequestFailure, userValidateToken, userValidateTokenSuccess, userValidateTokenFailure, resetPassword, resetPasswordSuccess, userResetPasswordFailure
} from '../actions/auth'


