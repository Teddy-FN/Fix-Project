import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// Import Redux
import { useSelector, useDispatch } from 'react-redux'
// Import Redux Action BookedAsField
import { BookedAsField } from '../../../redux/actions/booking'


function Confirm(props) {
    const dispatch = useDispatch()
    const [handleNext, setHandleNext] = useState(false)
    const handleBook = async (props) => {
        await dispatch(BookedAsField({
            selectedDate: props.selectedDate
        }))
        setHandleNext(true)
    }
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
                <button className="btn btn-warning" onClick={() => handleBook}>Submit</button>
                {props.hasNext() && <button onClick={props.next}>Next</button>}
            </div>
        </>
    )
}

export default Confirm