import {
    CREATE_FIELD_SUCCESS,
    UPDATE_FIELD_SUCCESS
} from './types'
import axios from 'axios'
const API = 'https://soka.kuyrek.com:3001'


export const CreateField = ({ fieldName, location, price, description, image }) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token2')
        try {
            const CreateField = await axios.post('https://soka.kuyrek.com:3001/field/create',
                {
                    fieldName: fieldName,
                    location: location,
                    price: price,
                    description: description,
                    image: image
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
            dispatch({
                type: CREATE_FIELD_SUCCESS,
                payload: CreateField.data
            })
            return CreateField.data
        } catch (error) {
            return ''
        }
    };
};

export const UpdateField = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token2')
        try {
            const UpdateField = await axios.put(API + `/field/update/id`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
            dispatch({
                type: UPDATE_FIELD_SUCCESS,
                payload: UpdateField.data.data
            })
            return UpdateField.data.data
        } catch (error) {
            return ''
        }
    };
};
