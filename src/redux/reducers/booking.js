import {
    BOOKED_FIELD_SUCCESS,
    BOOKED_FIELD_FAILURE
} from '../actions/types'

// Bikin state 
const initialState = {
    loading: false,
    result: {
        id_timeslot: [],
        timeslot: [],
        email: '',
        fullname: '',
        id_field: '',
        field: '',
        location: '',
        date: '',
        created_at: '',
        updated_at: ''
    },
    error: false
}

export default function BookingReducer(state = initialState, action) {
    switch (action.type) {
        case BOOKED_FIELD_SUCCESS: {
            return {
                ...state,
                loading: false,
                result: action.payload
            }
        }
        case BOOKED_FIELD_FAILURE: {
            return {
                loading: true,
                error: true
            }
        }
        default:
            return { ...state }
    }
}