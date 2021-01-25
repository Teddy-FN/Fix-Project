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
} from './types'

export const CreateField = payload => {
    return {
        type: CREATE_FIELD,
        payload
    }
}

export const CreateFieldSuccess = payload => {
    return {
        type: CREATE_FIELD_SUCCESS,
        payload
    }
}

export const CreateFieldFailure = error => {
    return {
        type: CREATE_FIELD_FAILURE,
        error
    }
}

export const UpdateField = payload => {
    return {
        type: UPDATE_FIELD,
        payload
    }
}

export const UpdateFieldSuccess = payload => {
    return {
        type: UPDATE_FIELD_SUCCESS,
        payload
    }
}

export const UpdateFieldFailuer = error => {
    return {
        type: UPDATE_FIELD_FAILURE,
        error
    }
}

export const DeleteField = payload => {
    return {
        type: DELETE_FIELD,
        payload
    }
}

export const DeleteFieldSuccess = payload => {
    return {
        type: DELETE_FIELD_SUCCESS,
        payload
    }
}

export const DeleteFieldFailure = error => {
    return {
        type: DELETE_FIELD_FAILURE,
        error
    }
}