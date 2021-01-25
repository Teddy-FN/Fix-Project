import { takeLatest, put } from 'redux-saga/effects'
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
    GET_PROFILE,
    GET_PROFILE_FAILURE
} from '../actions/types';

import {
    userLoginSuccess,
    userLogOutSuccess,
    userSignupSuccess,
} from '../actions/auth'

// Api
import {
    loginUser,
    signUpUser,
} from '../api/auth'

import {
    removeTokenUser,
    saveIdAccount,
    tokenUser,
} from '../token/user'

function* login(action) {
    try {
        const userLogin = yield loginUser(action.payload)
        console.log('Hasil dari userLogin', userLogin)
        yield put({
            type: USER_LOG_IN_SUCCESS
        })
        yield put({
            type: GET_PROFILE
        })
    } catch {
        yield put({
            type: USER_LOG_IN_FAILURE
        })
        yield put({
            type: GET_PROFILE_FAILURE
        })
        // yield put(userLoginFailure(error.response.data));
    }
}

function* register(action) {
    try {
        const userRegister = yield signUpUser(action.payload)
        console.log('Data User Register', userRegister)
        // Tambahin If Else biar lebih spesifik
        if (userRegister.data.message === 'Sign up success!') {
            yield put({
                type: USER_SIGNUP_SUCCESS,
            })
            yield put(userSignupSuccess(''));
        } else {
            yield put({
                type: USER_SIGNUP_FAILURE
            })
        }
    } catch (e) {
        yield put({
            type: USER_SIGNUP_FAILURE
        })
        // yield put(userSignupFailure(error.response.data));
    }
}

function* logOut() {
    try {
        yield removeTokenUser()
        yield put({
            type: USER_LOG_OUT_SUCCESS
        })
        yield put(userLogOutSuccess());
    } catch (e) {
        yield put({
            type: USER_LOG_OUT_FAILURE
        })
        // yield put(userLogOutFailure(error));
    }
}

export default function* authSaga() {
    yield takeLatest(USER_LOG_IN, login)
    yield takeLatest(USER_SIGNUP, register)
    yield takeLatest(USER_LOG_OUT, logOut)
}