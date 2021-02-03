import React from 'react'
import { Button } from 'react-bootstrap'
import './style.css'


function Confirm(props) {
    return (
        <>
        <div>
            {/* <p>Name: {props.state.name}</p>
            <p>Phone Number:  {props.state.phoneNumber}</p> */}
            <p>Choosen date: {props.state.setDates}</p>
            <p>Choosen time: {props.state.setTime}</p>
        </div>
        <br/>
        <div>
            {props.hasPrev() && <Button variant="link" className="button-modalbooking2" onClick={props.prev}>Previous</Button>}
            {props.hasNext() && <Button variant="link" className="button-modalbooking3" onClick={props.next}>Next</Button>}
        </div>
        </>
    )
}

export default Confirm