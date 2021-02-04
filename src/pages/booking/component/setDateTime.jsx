/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import MultiSelect from 'react-multi-select-component'
import { Button } from 'react-bootstrap'
import './style.css'
import { BookedAsField, BookedTimeSlotField } from '../../../redux/actions/booking'
import { useDispatch, useSelector } from "react-redux";

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

//     let timeslot = [];
//     let timeslotId = {id: 0};
// const timeLoop = () => {
//     for(let i=  0; i<=selectedTime.length; i++) {
//         return Object.assign(timeslotId, {id:i})
// } 
// }
// const timeMap = () => {
//     selectedTime.map((time, idx) => {
//         return {`id_timeslot[${idx}]: ${time.id}`}
// })
// }
// console.log('timeloop: ', timeMap)
    let dates =  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const submitBooking = () => {
        dispatch(BookedAsField({
            id: props.id,
            date: dates,
            id_timeslot: selectedTime[0].id
        }))
    }
    useEffect(() => {
        // eslint-disable-next-line no-undef
        // getTime()
    })


    const options = [
        { label: "09.00-10.00", value: "09.00-10.00" , id: 1},
        { label: "10.00-11.00", value: "10.00-11.00" , id: 2},
        { label: "11.00-12.00", value: "11.00-12.00" , id: 3},
        { label: "12.00-13.00", value: "12.00-13.00" , id: 4},
        { label: "13.00-14.00", value: "13.00-14.00" , id: 5},
        { label: "14.00-15.00", value: "14.00-15.00" , id: 6},
        { label: "15.00-16.00", value: "15.00-16.00" , id: 7},
        { label: "16.00-17.00", value: "16.00-17.00" , id: 8},
        { label: "17.00-18.00", value: "17.00-18.00" , id: 9},
        { label: "18.00-19.00", value: "18.00-19.00" , id: 10},
        { label: "19.00-20.00", value: "19.00-20.00" , id: 11},
        { label: "20.00-21.00", value: "20.00-21.00" , id: 12},
        { label: "21.00-22.00", value: "21.00-22.00" , id: 13},
        { label: "22.00-23.00", value: "22.00-23.00" , id: 14},
        { label: "23.00-00.00", value: "23.00-00.00" , id: 15},
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
console.log('selected time: ', selectedTime)

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
            <Button onClick={submitBooking} type='submit'>Submit</Button>
        </>
    )
}
export default SetDateTime