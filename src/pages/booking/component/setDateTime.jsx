import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import MultiSelect from 'react-multi-select-component'
import { Button } from 'react-bootstrap'
import './style.css'
import axios from 'axios'

function SetDateTime(props) {

    // eslint-disable-next-line no-unused-vars
    const [selectedDate, setSelectedDate] = useState(null)
    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState([]);

    const url = `https://soka.kuyrek.com:3003/booking/${props.id}/bookedfield`;

    const token = localStorage.getItem('token');

    const data = {
        data: {
            date : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        }
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const getTime = () => {
        axios
            .post(url, data, config)
            .then((res) => {
                console.log('ini ress time slot: ', res)
            })
            .catch((err) => {
                console.log('ini error timeslot: ', err)
            })
    }

    useEffect(() => {
        getTime()
    })


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
        <br/>
        <div>
            <h5>Choose your timeslot:</h5>
            <MultiSelect className="multi-option"
             options={options}
             value={selectedTime}
             onChange={setSelectedTime}
             labelledBy={"Select"}
             style={{backgroudColor: 'black'}}
            />
        </div>
        <br/>
            {props.hasPrev() && <Button className="button-modalbooking" variant="link" onClick={props.prev} style={{textDecoration: 'none'}}>Previous</Button>}
            {props.hasNext() && <Button className="button-modalbooking" variant="link" onClick={props.next} style={{textDecoration: 'none'}}>Next</Button>}
        
        </>
    )
}
export default SetDateTime