/* eslint-disable no-unused-vars */
import {
    USER_LOG_IN_SUCCESS,
    USER_SIGNUP_SUCCESS,
    USER_LOG_OUT_SUCCESS,
    USER_LOG_IN_GOOGLE,
    USER_LOG_IN_GOOGLE_SUCCESS,
    USER_LOG_IN_GOOGLE_FAILURE,
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
            dispatch({
                type: USER_SIGNUP_SUCCESS,
                payload: payload
            });
            return payload
        } catch (error) {
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
            localStorage.setItem('token2', res.data.token)
            dispatch({
                type: USER_LOG_IN_SUCCESS,
                payload: res.data.token
            });
            return res.data.token
        } catch (error) {
            return '';
        }
    };
};
// Login Using Google 
export const loginGoogle = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get('https://soka.kuyrek.com:3005/auth/google', {
                headers: {
                    "Content-Type": "application/json",
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            dispatch({
                type: USER_LOG_IN_GOOGLE_SUCCESS,
                payload: result.tokenObj.id_token
            })
            return result.tokenObj.id_token
        } catch (error) {
            dispatch({
                type: USER_LOG_IN_GOOGLE_FAILURE,
                error: error
            })
            console.error(error);
        }
    }
}
// export const loginGoogle = () => {
//     return async (dispatch) => {
//         try {
//             var url = 'https://soka.kuyrek.com:3005/auth/google';
//             fetch(url, {
//                 method: 'GET',
//                 headers: {
//                     'X-Requested-With': 'XMLHttpRequest'
//                 }
//             }).then(res => res.json())
//                 .catch(error => console.error('Error:', error));
//         } catch (error) {
//             dispatch({
//                 type: USER_LOG_IN_GOOGLE_FAILURE,
//                 error: error
//             })
//             console.error(error);
//         }
//     }
// }
export const logoutUser = () => {
    return dispatch => {
        dispatch({ type: USER_LOG_OUT_SUCCESS })
    }
};