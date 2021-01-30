import {
    CREATE_FIELD_SUCCESS,
    UPDATE_FIELD_SUCCESS
} from './types'
import axios from 'axios'
const API = 'https://soka.kuyrek.com:3001'
const token = localStorage.getItem('token')

export const CreateField = () => {
    return async (dispatch) => {
        try {
            const CreateField = await axios.post(API + '/field/create',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Tambah Lapangan', CreateField)
            dispatch({
                type: CREATE_FIELD_SUCCESS,
                payload: CreateField.data.data
            })
            console.log('Admin Tambah Lapangan', CreateField.data.data)
            return CreateField.data.data
        } catch (error) {
            console.log(error)
            return ''
        }
    };
};

export const UpdateField = () => {
    return async (dispatch) => {
        try {
            const UpdateField = await axios.put(API + `/field/update/id`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
            console.log('Ini Action Update Lapangan', UpdateField)
            dispatch({
                type: UPDATE_FIELD_SUCCESS,
                payload: UpdateField.data.data
            })
            console.log('Hasil Complete dari Update Fiedl', UpdateField.data.data)
            return UpdateField.data.data
        } catch (error) {
            console.log('Ini Error', error)
            return ''
        }
    };
};
