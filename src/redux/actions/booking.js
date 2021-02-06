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
    console.log('INI PROPS BOOK WOII', props)
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
            console.log('%cToken User Booked%c', token, 'color: black')
            const res = await axios.post(API + `/${props.id}/create/bookedfield`, data, config)
            console.log('%cINI RES BOOKING%c', res, 'color: skylightBlue')
            dispatch({
                type: BOOKED_FIELD,
                payload: res.data.data
            })
            console.log('%cRESULT BOOKING%c', res.data.data, 'color: coral')
            return res.data.data
        } catch (error) {
            console.log('%cINI ERROR%c', error, 'color : red')
            return ''
        }
    }
}

export const BookedTimeSlotField = (props) => {
    console.log('INI CONSOLE BOOKEDTIMESLOT', props)
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        try {
            console.log('TOKEN USER TIME SLOT', token)
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
            console.log("INI RES BOOOOOOOOKKKKKK", res)
            return res
        } catch (error) {
            console.log(error)
        }
    }
}


export const getTimeSlotBooked = props => {
    console.log('INI TIME SLOT BOOKING WOY', props)
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
            console.log(error)
        }
    }
}
// Ini nanti di kirim ke Reducer