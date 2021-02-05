import {
    BOOKED_TIMESLOT,
    BOOKED_TIMESLOT_SUCCESS,
    BOOKED_TIMESLOT_FAILURE
} from '../actions/types'

const initialState = {
    isLoading: false,
    error: false,
    data: {
        date: '',
        id_timeslot: '',
        password: '',
        passwordConfirmation: '',
        email: ''
    }
}

export default function BookedTimeSlot(state = initialState, action) {
    switch (action.type) {
        case BOOKED_TIMESLOT:
            return {
                ...state,
                isLoading: false,
                error: false,
                data: action.payload
            }
        case BOOKED_TIMESLOT_SUCCESS:
            return {
                ...state,
                isLoading: true,
                error: false,
                data: action.payload
            }
        case BOOKED_TIMESLOT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: false,
            }
        default:
            return { ...state }
    }
}