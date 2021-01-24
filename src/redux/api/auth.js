import axios from 'axios'
const API = 'https://soka.kuyrek.com:3005'

export const getProfileUser = data => {
    return axios.get(API + '/user/profile', {
        Userdata: data
    })
        .catch(err => console.log(err))
}

export const editProfile = data => {
    return axios.put(API + '/user/edit', {
        ProfileUpdate: data
    })
        .catch(err => console.log(err))
}

export const loginUser = data => {
    return axios.post(API + '/login', {
        userLogin: data
    })
        .catch(err => console.log(err))
}

export const signUpUser = data => {
    return axios.post(API + '/signup', {
        signInUser: data
    })
        .catch(err => console.log(err))
}
