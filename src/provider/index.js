/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
export const handler = React.createContext();
const Provider = (props) => {
    const [logged, setLogged] = useState(false)
    const [modalLoginUser, setModalLoginUser] = useState(false)
    const [modalSignUpUser, setModalSignUpUser] = useState(false)

    return (
        <handler.Provider value={{ logged, setLogged, modalLoginUser, setModalLoginUser, modalSignUpUser, setModalSignUpUser }}>
            {props.children}
        </handler.Provider>
    );
};

export default Provider;