import {
    GET_PROFILE_SUCCESS,
    UPDATE_PROFILE_SUCCESS,
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
        case GET_PROFILE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        }
    }
}

export default function UpdateProfile(state = initialState, action) {
    switch (type.action) {
        case UPDATE_PROFILE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        }
    }
}