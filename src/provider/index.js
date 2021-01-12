import React, { useState, useEffect } from "react";
export const handler = React.createContext();
const Provider = (props) => {
    const [logged, setLogged] = useState(false)

    return (
        <handler.Provider value={{ logged, setLogged }}>
            {props.children}
        </handler.Provider>
    );
};

export default Provider;