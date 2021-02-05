import {
    GET_BOOKED_TIMESLOT,
    GET_BOOKED_TIMESLOT_SUCCESS,
    GET_BOOKED_TIMESLOT_FAILURE
} from '../actions/types'

const initialState = {
    isLoading: false,
    data: {
        date: '',
        id_timeslot: '',
        password: '',
        passwordConfirmation: '',
        email: ''
    },
    error: false
}


export default function getBookedTimeSlot(state = initialState, action) {
    switch (action.type) {
        case GET_BOOKED_TIMESLOT:
            return {
                ...state,
                isLoading: true,
                data: action.payload,
                error: false
            }
        case GET_BOOKED_TIMESLOT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: false
            }
        case GET_BOOKED_TIMESLOT_FAILURE:
            return {
                ...state,
                isLoading: true,
                error: true
            }
        default:
            return { ...state }
    }
}