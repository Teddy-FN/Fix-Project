import {
    GET_PROFILE_SUCCESS,
    UPDATE_PROFILE_SUCCESS
} from './types'
import axios from 'axios'
const API = 'https://soka.kuyrek.com:3005'
const token = localStorage.getItem('token')

export const GetProfile = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`https://soka.kuyrek.com:3005/user/profile`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Ini Res', res)
            dispatch({
                type: GET_PROFILE_SUCCESS,
                payload: res.data.data
            });
            console.log('DAta User', res.data.data)
            return res.data.data
        } catch (error) {
            console.log("error login ", error);
            return '';
        }
    };
};

export const UpdateProfile = (data) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(API + `/user/edit`, data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Ini Res', res)
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: res.data.data
            });
            return res.data.data
        } catch (error) {
            console.log("error login ", error);
            return '';
        }
    };
};