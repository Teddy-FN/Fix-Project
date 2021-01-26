import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
} from './types'


export const getProfileUser = payload => {
    return {
        type: GET_PROFILE,
        payload
    }
}

export const getProfileUserSuccess = payload => {
    return {
        type: GET_PROFILE_SUCCESS,
        payload
    }
}

export const getProfileUserFailure = error => {
    return {
        type: GET_PROFILE_FAILURE,
        error
    }
}

export const updateProfile = payload => {
    return {
        type: UPDATE_PROFILE,
        payload
    }
}

export const updateProfileSuccess = payload => {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        payload
    }
}

export const updateProfileFailure = error => {
    return {
        type: UPDATE_PROFILE_FAILURE,
        error
    }
}