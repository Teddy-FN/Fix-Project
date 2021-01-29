import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function SetDate () {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <>
        <div>
            <h4>Choose your date:</h4>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
            />
        </div>
        <div>
            <h4>Choose your timeslot:</h4>
        </div>
        <a href="#" class="next round">&#8250;</a>
        </>
    )
}

export default SetDate