import axios from 'axios'
const APIBOOKING = 'https://soka.kuyrek.com:3003/booking/600513ca38232609d343d6c0'

export const GetBookedTimeSlot = payload => {
    return axios.get(APIBOOKING + '/booked', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: payload
    })
        .cath(err => console.log(err))
}

export const BookedAsPerson = payload => {
    return axios.post(APIBOOKING + '/create', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: payload
    })
        .catch(err => console.log(err))
}

export const BookedAsATeam = payload => {
    return axios.post(APIBOOKING + '/create/bookedteam', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: payload
    })
        .cath(err => console.log(err))
}

export const BookedAsField = payload => {
    return axios.post(APIBOOKING + '/create/bookedfield', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: payload
    })
        .cath(err => console.log(err))
}