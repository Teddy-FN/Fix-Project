import {
    USER_LOG_IN_SUCCESS,
    USER_SIGNUP_SUCCESS,
    USER_LOG_OUT_SUCCESS
} from './types'
import axios from 'axios'

export const SignUp = ({ fullname, email, password, passwordConfirmation }) => {
    return async (dispatch) => {
        try {
            const payload = await axios.post(
                `https://soka.kuyrek.com:3005/signup`,
                {
                    fullname: fullname,
                    email: email,
                    password: password,
                    passwordConfirmation: passwordConfirmation
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log('Ini Res', payload)
            dispatch({
                type: USER_SIGNUP_SUCCESS,
                payload: payload
            });
            return payload
        } catch (error) {
            console.log("error login ", error);
            return '';
        }
    };
};

export const login = ({ email, password }) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(
                `https://soka.kuyrek.com:3005/login`,
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log('Ini Res', res)
            dispatch({
                type: USER_LOG_IN_SUCCESS,
                payload: res.data.token
            });
            return res.data.token
        } catch (error) {
            console.log("error login ", error);
            return '';
        }
    };
};


export const logoutUser = () => {
    return dispatch => {
        dispatch({ type: USER_LOG_OUT_SUCCESS })
    }
};

