/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MultiSelect from 'react-multi-select-component';
import { Button } from 'react-bootstrap';
import './style.css';
import axios from 'axios';
import swal from 'sweetalert';


function SetDateTime(props) {

    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState([]);
    const [timeslot, setTimeslot] = useState([]);
    const [timeslotId, setTimeslotId] = useState([]);
    const [showTiket, setShowTiket] = useState(false);

    let dates = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    const token = localStorage.getItem('token');

    const urlTimeslot = `https://soka.kuyrek.com:3003/booking/${props.id}/bookedfield`
    const urlBooking = `https://soka.kuyrek.com:3003/booking/${props.id}/create/bookedfield`


    const config = {
        headers: {
            Authorization: `bearer ${token}`
        }
    }

    const getTimeslot = () => {
        const data = {
            date: dates
        }
        axios
            .post(urlTimeslot, data, config)
            .then((res) => {

                setTimeslot(res.data.available_timeslot)
                setTimeslotId(res.data.id_timeslot)
            })
            .catch((err) => {

            })
    }

    const idTimeslot = selectedTime.map((id => (id.id)))
    const dataIdTime = idTimeslot.join()


    const submitBooking = (e) => {
        e.preventDefault();
        const dataBooking = {
            date: dates,
            id_timeslot: dataIdTime
        }
        axios
            .post(urlBooking, dataBooking, config)
            .then((res) => {
                swal({
                    icon: "success",
                    title: "Your Booking is Succes",
                    text: "Happy playing",
                    type: "success",
                    buttons: false,
                    timer: 3000,
                });
                // setShowTiket(true);
            })
            .catch((err) => {
                swal({
                    icon: "warning",
                    title: "Selected time is Conflict",
                    text: "Please try again with another time",
                    type: "warning",
                    buttons: false,
                    timer: 3000,
                });
            })
    }

    useEffect(() => {
        getTimeslot()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeslot])


    return (
        <>
            <div>
                <h5>Choose your dateFormat:</h5>
                <DatePicker className="dateFormat-picker"
                    selected={date}
                    onClick={getTimeslot}
                    onChange={(e) => setDate(e) && getTimeslot}
                    dateFormat='yyyy-MM-dd'
                    minDate={new Date()}
                />
            </div>
            <br />
            <div>
                <h5>Choose your timeslot:</h5>
                <MultiSelect className="multi-option"
                    options={timeslot.map((time, idx) => {
                        return ({ label: time, value: time, id: timeslotId[idx] })
                    })}
                    value={selectedTime}
                    onChange={(e) => (setSelectedTime(e))}
                    labelledBy={"Select"}
                    style={{ backgroudColor: 'black' }}
                />
            </div>
            <br />
            {props.hasPrev() && <Button className="button-modalbooking1" variant="link" onClick={props.prev} style={{ textDecoration: 'none' }}>Previous</Button>}
            {/* {props.hasNext() && <Button className="button-modalbooking2" variant="link" onClick={props.next} style={{ textDecoration: 'none' }}>Next</Button>} */}
            <Button className="submit-data" variant='link' type='submit' onClick={submitBooking} style={{ textDecoration: 'none' }}>Submit</Button>
        </>
    )
}
export default SetDateTime
