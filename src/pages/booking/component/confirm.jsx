import React from 'react'
import { Button } from 'react-bootstrap'
import './style.css'


function Confirm(props) {
    return (
        <>
        <div>
            {/* <p>Name: {props.state.name}</p>
            <p>Phone Number:  {props.state.phoneNumber}</p> */}
            <p>Choosen date:</p>
            <p>Choosen time:</p>
        </div>
        <br/>
        <div>
            {props.hasPrev() && <Button variant="link" className="button-modalbooking" onClick={props.prev} style={{textDecoration: 'none'}}>Previous</Button>}
            {props.hasNext() && <Button variant="link" className="button-modalbooking" onClick={props.next} style={{textDecoration: 'none'}}>Next</Button>}
        </div>
        </>
    )
}

export default Confirm