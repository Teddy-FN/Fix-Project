import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import './style.css'

// Import Action Get 
import { getTimeSlotBooked } from '../../../redux/actions/booking'
// Import React Redux 
import { useDispatch } from 'react-redux'

function Confirm(props) {
    const dispatch = useDispatch()
    // const [handleNext, setHandleNext] = useState(false)
    // const handleBook = async (props) => {
    //     await dispatch(BookedAsField({
    //         selectedDate: props.selectedDate
    //     }))
    //     setHandleNext(true)
    // }
    const [date, setDate] = useState([])
    const [time, setTime] = useState([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        dispatch(getTimeSlotBooked(
            setDate(),
            setTime()
        ))
    })
    return (
        <>
            <div>
                {/* <p>Name: {props.state.name}</p>
                <p>Phone Number:  {props.state.phoneNumber}</p> */}
                <p>Choosen date: {date}</p>
                <p>Choosen time: {time}</p>
            </div>
            <br />
            <div>
                {props.hasPrev() && <Button variant="link" className="button-modalbooking2" onClick={props.prev}>Previous</Button>}
                <Button className="submit-data-final" variant='link'>Submit</Button>
                {/* {props.hasNext() && <Button variant="link" className="button-modalbooking3" onClick={props.next}>Next</Button>} */}
            </div>
        </>
    )
}

export default Confirm
