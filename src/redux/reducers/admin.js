import {
    CREATE_FIELD_SUCCESS,
    UPDATE_FIELD_SUCCESS,
    DELETE_FIELD_SUCCESS,
} from '../actions/types'

const initialState = {
    isLoading: false,
    data: {
        fieldName: '',
        location: '',
        price: '',
        description: '',
        image: []
    }
}

export default function AdminReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_FIELD_SUCCESS:
            return {
                ...state,
                ...action,
                data: action.payload
            }
        case UPDATE_FIELD_SUCCESS:
            return {
                ...state,
                ...action,
                data: action.payload
            }
        case DELETE_FIELD_SUCCESS:
            return {
                ...state,
                ...action,
            }
        default:
            return {
                ...state
            }
    }
}