import {
    BOOKED_TIMESLOT,
    BOOKED_TIMESLOT_SUCCESS,
    BOOKED_TIMESLOT_FAILURE,
    BOOKED_PERSON,
    BOOKED_PERSON_SUCCESS,
    BOOKED_PERSON_FAILURE,
    BOOKED_TEAM,
    BOOKED_TEAM_SUCCESS,
    BOOKED_TEAM_FAILURE,
    BOOKEAD_FIELD,
    BOOKEAD_FIELD_SUCCESS,
    BOOKEAD_FIELD_FAILURE,
} from './types'


export const BookedTimeSlot = payload => {
    return {
        type: BOOKED_TIMESLOT,
        payload
    }
}

export const BookedTimeSlotSuccess = payload => {
    return {
        type: BOOKED_TIMESLOT_SUCCESS,
        payload
    }
}

export const BookedTimeSlotFailure = error => {
    return {
        type: BOOKED_TIMESLOT_FAILURE,
        error
    }
}

export const BookedPerson = payload => {
    return {
        type: BOOKED_PERSON,
        payload
    }
}

export const BookedPersonSuccess = payload => {
    return {
        type: BOOKED_PERSON_SUCCESS,
        payload
    }
}

export const BookedPersonFailure = error => {
    return {
        type: BOOKED_PERSON_FAILURE,
        error
    }
}

export const BookedTeam = payload => {
    return {
        type: BOOKED_TEAM,
        payload
    }
}

export const BookedTeamSucces = payload => {
    return {
        type: BOOKED_TEAM_SUCCESS,
        payload
    }
}

export const BookedTeamFailure = error => {
    return {
        type: BOOKED_TEAM_FAILURE,
        error
    }
}

export const BookedField = payload => {
    return {
        type: BOOKEAD_FIELD,
        payload
    }
}

export const BookedFieldSucces = payload => {
    return {
        type: BOOKEAD_FIELD_SUCCESS,
        payload
    }
}

export const BookedFieldFailure = error => {
    return {
        type: BOOKEAD_FIELD_FAILURE,
        error
    }
}