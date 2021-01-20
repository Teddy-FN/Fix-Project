import {
    GET_UPDATE_PROFILE,
    SET_UPDATE_PROFILE_SUCCESS,
    SET_UPDATE_PROFILE_FAIL
} from "../actions/types";

const intialState = {
    dataJson: [],
    loading: false,
    error: null,
};

const getJson = (state = intialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        default:
            return {
                ...state,
            };
        case GET_UPDATE_PROFILE:
            return {
                ...state,
                loading: true,
            };
        case SET_UPDATE_PROFILE_SUCCESS:
            return {
                dataJson: payload,
                loading: false,
            };
        case SET_UPDATE_PROFILE_FAIL:
            return {
                dataJson: {},
                loading: false,
                error: error,
            };
    }
};

export default getJson;
