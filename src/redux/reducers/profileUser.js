import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
} from '../actions/types'

const initialState = {
    loading: false,
    data: {
        fullname: '',
        email: '',
        phone: '',
        description: '',
        profilePic: ''
    }
}

export default function profileUSer(state = initialState, action) {
    switch (type.action) {
        case GET_PROFILE: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_PROFILE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        }
    }
}