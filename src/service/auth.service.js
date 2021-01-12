import axios from "axios";

const API_URL_REGISTER = "13.229.66.0:3005/signup";

const register = (username, email, password, confirmationPassword) => {
    return axios.post(API_URL_REGISTER + "signup", {
        username,
        email,
        password,
        confirmationPassword
    });
};

const login = (email, password) => {
    return axios
        .post(API_URL + "signin", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};