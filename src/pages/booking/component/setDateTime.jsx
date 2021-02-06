/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import MultiSelect from 'react-multi-select-component'
import { Button } from 'react-bootstrap'
import './style.css'
// import { BookedAsField, BookedTimeSlotField } from '../../../redux/actions/booking'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

// // DISPATCH
// import { useDispatch, useSelector } from 'react-redux'
// // Import from action
// import { BookedTimeSlotField } from '../../../redux/actions/booking'


function SetDateTime(props) {
    console.log('props time', props)
    // eslint-disable-next-line no-unused-vars
    const [selectedDate, setSelectedDate] = useState(null)
    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState([]);
    const dispatch = useDispatch();
    const [timeslot, setTimeslot] = useState([]);
    const [timeslotId, setTimeslotId] = useState([]);
    const [selectedTimeslotId, setSelectedTimeslotId] = useState([]);

    
    
    let dates = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    const token = localStorage.getItem('token');

    const urlTimeslot = `https://soka.kuyrek.com:3003/booking/${props.id}/bookedfield`
    const urlBooking = `https://soka.kuyrek.com:3003/booking/${props.id}/create/bookedfield`

    const config ={
        headers: {
            Authorization: `bearer ${token}`
        }
    }

    const data = {
        date: dates
    }

    const getTimeslot = () => {
        axios
        .post(urlTimeslot, data, config)
        .then((res) => {
            console.log('respon timeslot: ',res)
            setTimeslot(res.data.available_timeslot)
            setTimeslotId(res.data.id_timeslot)
        })
        .catch((err) => {
            console.log('error timeslot: ',err)
        })
    }
    
    const idTimeslot = selectedTime.map((id => (id.id)))
    const dataIdTime = idTimeslot.join()
    console.log('id timeslot: ', dataIdTime)
    const dataBooking = {
        date: dates,
        id_timeslot: dataIdTime
    }

    const submitBooking = () => {
        axios
        .post(urlBooking, dataBooking, config)
        .then((res) => {
            console.log('respon booking: ',res)
        })
        .catch((err) => {
            console.log('error booking: ',err)
        })
    }

    useEffect(() => {
       getTimeslot()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


console.log('ini selectedTime: ', selectedTime)
console.log('ini timeslot id: ', timeslotId)
    return (
        <>
            <div>
                <h5>Choose your dateFormat:</h5>
                <DatePicker className="dateFormat-picker"
                    selected={date}
                    onChange={date => setDate(date)}
                    dateFormat='yyyy-MM-dd'
                    minDate={date}
                />
            </div>
            <br />
            <div>
                <h5>Choose your timeslot:</h5>
                <MultiSelect className="multi-option"
                    options={timeslot.map((time, idx) => {return ({label: time, value:  time, id: timeslotId[idx]})})}
                    value={selectedTime}
                    onChange={(e) => (setSelectedTime(e))}
                    labelledBy={"Select"}
                    style={{ backgroudColor: 'black' }}
                />
            </div>
            <br />
            {props.hasPrev() && <Button className="button-modalbooking1" variant="link" onClick={props.prev} style={{ textDecoration: 'none' }}>Previous</Button>}
            {props.hasNext() && <Button className="button-modalbooking2" variant="link" onClick={props.next} style={{ textDecoration: 'none' }}>Next</Button>}
            <Button className="submit-data"  variant='link' type='submit' onClick={submitBooking}>Submit</Button>
        </>
    )
}
export default SetDateTime