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
        profilePic: '',
        // eslint-disable-next-line no-dupe-keys
        // phone: '',
        id: ''
    }
}

export default function profileUser(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        }
        case UPDATE_PROFILE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        }
        default:
            return { ...state }
    }
}
