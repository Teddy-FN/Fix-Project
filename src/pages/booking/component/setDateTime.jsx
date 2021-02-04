import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import MultiSelect from 'react-multi-select-component'
import { Button } from 'react-bootstrap'
import './style.css'

// // DISPATCH
// import { useDispatch, useSelector } from 'react-redux'
// // Import from action
// import { BookedTimeSlotField } from '../../../redux/actions/booking'


function SetDateTime(props) {
    console.log('INI SET DATE TIME', props)
    const [selectedDate, setSelectedDate] = useState(null)

    const [selectedTime, setSelectedTime] = useState([]);
    const options = [
        { label: "09.00-10.00", value: "09.00-10.00" },
        { label: "10.00-11.00", value: "10.00-11.00" },
        { label: "11.00-12.00", value: "11.00-12.00" },
        { label: "12.00-13.00", value: "12.00-13.00" },
        { label: "13.00-14.00", value: "13.00-14.00" },
        { label: "14.00-15.00", value: "14.00-15.00" },
        { label: "15.00-16.00", value: "15.00-16.00" },
        { label: "16.00-17.00", value: "16.00-17.00" },
        { label: "17.00-18.00", value: "17.00-18.00" },
        { label: "18.00-19.00", value: "18.00-19.00" },
        { label: "19.00-20.00", value: "19.00-20.00" },
        { label: "20.00-21.00", value: "20.00-21.00" },
        { label: "21.00-22.00", value: "21.00-22.00" },
        { label: "22.00-23.00", value: "22.00-23.00" },
        { label: "23.00-00.00", value: "23.00-00.00" },
    ];
    // const params = useParams()

    // GET TIMESLOT FROM BACKEND
    // const dispatch = useDispatch()
    // const dataTime = useSelector(state => state.BookedTimeSlot.data)
    // const [time, setDate] = useState(null)
    // const postTime = async (e) => {
    //     await dispatch(BookedTimeSlotField({
    //         setDate: e
    //     }))
    // }
    // // UseEffect
    // useEffect(() => {

    // }, [dataTime])


    return (
        <>
            <div>
                <h5>Choose your date:</h5>
                <DatePicker className="date-picker"
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat='dd/MM/yyyy'
                    minDate={new Date()}
                />
            </div>
            <br />
            <div>
                <h5>Choose your timeslot:</h5>
                <MultiSelect className="multi-option"
                    options={options}
                    value={selectedTime}
                    onChange={setSelectedTime}
                    labelledBy={"Select"}
                />
            </div>
            <br />
            {props.hasPrev() && <Button className="button-modalbooking" variant="link" onClick={props.prev}>Previous</Button>}
            {props.hasNext() && <Button className="button-modalbooking1" variant="link" onClick={props.next}>Next</Button>}

        </>
    )
}
export default SetDateTime