import {
    GET_PROFILE_SUCCESS,
    UPDATE_PROFILE_SUCCESS
} from './types'
import axios from 'axios'
const API = 'https://soka.kuyrek.com:3005'
export const GetProfile = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token2')
        try {
            const res = await axios.get(API + `/user/profile`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
            dispatch({
                type: GET_PROFILE_SUCCESS,
                payload: res.data.data
            });
            return res.data
        } catch (error) {
            return '';
        }
    };
};


export const UpdateProfile = (data) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token2')
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
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: res.data.data
            });
            return res.data.data
        } catch (error) {
            return '';
        }
    };
};