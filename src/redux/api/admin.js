import axios from 'axios'
const APIADMIN = 'https://soka.kuyrek.com:3001/field'


export const CreateField = payload => {
    return axios.post(APIADMIN + '/create', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: payload
    })
        .catch(err => console.log(err))
}

export const UpdateField = (payload, id) => {
    return axios.put(APIADMIN + `/update/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: payload
    })
}

export const DeleteField = (payload, id) => {
    return axios.del(APIADMIN + `/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: payload
    })
}