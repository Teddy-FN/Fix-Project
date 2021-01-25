import axios from 'axios'
const API = 'https://soka.kuyrek.com:3005'
const token = localStorage.getItem('token')

export const getProfileUser = payload => {
    return axios.get(API + '/user/profile', {
        data: payload
    })
        .catch(err => console.log(err))
}

export const loginUser = payload => {
    axios.post('https://soka.kuyrek.com:3005/login', payload)
        .then((dataResult) => {
            localStorage.setItem('token', dataResult.data.token)
            console.log('DATA RESULT', dataResult)
        })
        .then(err => {
            // setLogged(true)
            console.log('error', err)
        });
}

export const signUpUser = payload => {
    return axios.post(API + '/signup', payload)
        .catch(err => console.log(err))
}

export const editProfile = payload => {
    return axios.put(API + '/user/edit', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: payload
    })
        .catch(err => console.log(err))
}
