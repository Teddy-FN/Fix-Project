import {
    GET_PROFILE_SUCCESS,
} from './types'
import axios from 'axios'
const API = 'https://soka.kuyrek.com:3005'
const token = localStorage.getItem('token')

export const GetProfile = () => {
    return async (dispatch) => {
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
            console.log('Ini Res', res)
            dispatch({
                type: GET_PROFILE_SUCCESS,
                payload: res.data.data
            });
            return res.data.data
        } catch (error) {
            console.log("error login ", error);
            return '';
        }
    };
};


// Get Profile??
export const loadProfile = () => async (dispatch) => {
    const response = await axios.get(API + '/user/profile',
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

    return dispatch(UpdateProfile(response.data.data));
};

export const UpdateProfile = ({ fullname, description, phone, profilePic }) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(API + `/user/edit`, {
                fullname: fullname,
                description: description,
                phone: phone,
                profilePic: profilePic
            },
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
            return res.data.data
        } catch (error) {
            console.log("error login ", error);
            return '';
        }
    };
};