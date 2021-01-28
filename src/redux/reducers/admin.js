import {
    CREATE_FIELD,
    CREATE_FIELD_SUCCESS,
    CREATE_FIELD_FAILURE,
    UPDATE_FIELD,
    UPDATE_FIELD_SUCCESS,
    UPDATE_FIELD_FAILURE,
    DELETE_FIELD,
    DELETE_FIELD_SUCCESS,
    DELETE_FIELD_FAILURE,
} from '../actions/types'

const initialState = {
    isLoading: false,
}

export default function AdminReducer(state = initialState, action) {
    switch (type.action) {
        case CREATE_FIELD:
            return {
                ...state,
                ...action,

            }
        case CREATE_FIELD_SUCCESS:
            return {
                ...state,
                ...action,
            }
        case CREATE_FIELD_FAILURE:
            return {
                ...state,
                ...action,
            }
        case UPDATE_FIELD:
            return {
                ...state,
                ...action,
            }
        case UPDATE_FIELD_SUCCESS:
            return {
                ...state,
                ...action,
            }
        case UPDATE_FIELD_FAILURE:
            return {
                ...state,
                ...action
            }
        case DELETE_FIELD:
            return {
                ...state,
                ...action,
            }
        case DELETE_FIELD_SUCCESS:
            return {
                ...state,
                ...action,
            }
        case DELETE_FIELD_FAILURE:
            return {
                ...state,
                ...action
            }
    }
}