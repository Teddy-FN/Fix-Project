import axios from 'axios';

export default function UserProfile() {
    return {
        type: 'GET_USER',
        payload: axios.get('https://soka.kuyrek.com:3005/user/profile')
    };
}

export function setUser(user) {
    return {
        type: 'SET_USER',
        payload: user
    }
}