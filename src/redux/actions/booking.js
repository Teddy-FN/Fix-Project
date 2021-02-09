/* eslint-disable no-unused-vars */
import {
    BOOKED_FIELD,
    BOOKED_TIMESLOT,
    BOOKED_TIMESLOT_SUCCESS,
    BOOKED_TIMESLOT_FAILURE,
    GET_BOOKED_TIMESLOT
} from './types'
import axios from 'axios'
const API = 'https://soka.kuyrek.com:3003/booking'

// Booked as Field
export const BookedAsField = (props) => {
    let data = {
        date: props.date,
        id_timeslot: props.id_timeslot
    }
    const token = localStorage.getItem('token')
    let config = {
        header: {
            Authorization: `Bearer ${token}`
        }
    }
    return async (dispatch) => {
        try {
            const res = await axios.post(API + `/${props.id}/create/bookedfield`, data, config)
            dispatch({
                type: BOOKED_FIELD,
                payload: res.data.data
            })
            return res.data.data
        } catch (error) {
            return ''
        }
    }
}

export const BookedTimeSlotField = (props) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        try {
            const res = await axios.post(`https://soka.kuyrek.com:3003/booking/${props.id}/bookedfield`, {
                header: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
            dispatch({
                type: BOOKED_TIMESLOT,
                payload: res
            })
            return res
        } catch (error) {
            return ''
        }
    }
}


export const getTimeSlotBooked = props => {
    return async (dispatch) => {
        const token = localStorage('token')
        try {
            const result = await axios.get(`https://soka.kuyrek.com:3003/booking/${props.id}/bookedfield`, {
                header: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
            dispatch({
                type: GET_BOOKED_TIMESLOT,
                payload: result.data
            })
            return result.data
        } catch (error) {
            return ''
        }
    }
}
// Ini nanti di kirim ke Reducer