import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import MultiSelect from 'react-multi-select-component'

function SetDateTime(props) {
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
    return (
        <>
        <div>
            <h5>Choose your date:</h5>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
            />
        </div>
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
            {props.hasPrev() && <button onClick={props.prev}>Previous</button>}
            {props.hasNext() && <button onClick={props.next}>Next</button>}
        
        </>
    )
}
export default SetDateTime