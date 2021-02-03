import React from 'react'
// import { Link } from 'react-router-dom'

function Confirm(props) {
    return (
        <>
        <div>
            <p>Name: {props.state.name}</p>
            <p>Phone Number:  {props.state.phoneNumber}</p>
            <p>Choosen date:</p>
            <p>Choosen time:</p>
        </div>
        <div>
            {props.hasPrev() && <button onClick={props.prev}>Previous</button>}
            {props.hasNext() && <button onClick={props.next}>Submit</button>}
        </div>
        </>
    )
}

export default Confirm