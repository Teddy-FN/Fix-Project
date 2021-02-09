import React, { useState, useEffect } from 'react'
import { Modal, Button, Col } from 'react-bootstrap'
// import { Steps, Step } from "react-step-builder"
// import SetDateTime from '../booking/component/setDateTime'
// import Confirm from '../booking/component/confirm'
// import Success from '../booking/component/success'
import './modalBooking.css'
// import DatePicker from 'react-datepicker'
// import MultiSelect from 'react-multi-select-component'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MultiSelect from 'react-multi-select-component';
import '../booking/component/style.css';
import axios from 'axios';
import swal from 'sweetalert'


// Icon 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPrint } from '@fortawesome/free-solid-svg-icons';
// // Print To PDF
// import { useReactToPrint } from 'react-to-print';
import Success from '../booking/component/success';





const ModalBooking = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showTiket, setShowTiket] = useState(false);
    const handleCloseTiket = () => setShowTiket(false);
    const handleShowTiket = () => {
        setShowTiket(true);
        setShow(false)
    }
    const [dataBooking, setDataBooking] = useState([]);
    // let price = props.price
    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState([]);
    const [timeslot, setTimeslot] = useState([]);
    const [timeslotId, setTimeslotId] = useState([]);
    // const [showTiket, setShowTiket] = useState(false);
    const [showTiketModal, setShowTiketModal] = useState(false)

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
                    timer: 1000,
                });
                setDataBooking(res.data.result);
                setShowTiketModal(true);
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


    // Bikin method di dlm method dispatch
    return (
        <div>
            <Button className='col-12 mb-3 book-field-button' variant="link" onClick={handleShow} style={{ textDecoration: 'none' }}>
                Book
        </Button>
            <Modal
                className="modal-booking"
                show={show}
                onHide={handleClose} >
                {props.isLogin !== true ? (
                    <div>
                        <Modal.Body>
                            <Col>
                                <h3 style={{ textAlign: "center", padding: '30px 30px' }}>
                                    Hello guest, <br />
                    please log in first <br />
                    as user!!
                    </h3>
                                <h4 style={{ textAlign: "center", paddingBottom: '30px' }}>
                                    if you want booking a field
                    </h4>
                            </Col>
                        </Modal.Body>
                    </div>
                ) : (
                        <Modal.Body className="booking-step-pesan">
                            {/* <div className="multistep"> */}
                            {/* <Steps>  */}
                            {/* <Step component={UserInfo} />  */}
                            {/* <Step component={SetDateTime} id={props.id}/>
                            <Step component={Confirm} />
                            <Step component={Success} /> */}
                            {/* </Steps>                         */}
                            {/* </div> */}
                            <div>
                                <h5 className='subtitle-book'>Choose your dateFormat:</h5>
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
                                <h5 className='subtitle-book'>Choose your timeslot:</h5>
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
                            {/* {props.hasPrev() && <Button className="button-modalbooking1" variant="link" onClick={props.prev} style={{ textDecoration: 'none' }}>Previous</Button>} */}
                            {/* {props.hasNext() && <Button className="button-modalbooking2" variant="link" onClick={props.next} style={{ textDecoration: 'none' }}>Next</Button>} */}
                            <Button className="submit-data" variant='link' type='submit' onClick={submitBooking} style={{ textDecoration: 'none' }}>Submit</Button>
                            {showTiketModal === true ? (
                                <Button className="submit-data2" variant='link' type='submit' onClick={handleShowTiket} style={{ textDecoration: 'none' }}>See e-Tiket</Button>
                            ) : (<p></p>)}

                        </Modal.Body>
                    )}
            </Modal>

            {/* Modal eTiket */}
            {/* =================================================================================================== */}
            <div >
                <Modal
                    show={showTiket}
                    onHide={handleCloseTiket}
                    className='modal-tiket'
                >
                    <Modal.Body>
                        <Success
                            id={dataBooking?.id}
                            fullname={dataBooking?.fullname}
                            field={dataBooking?.field}
                            date={dataBooking?.date}
                            timeslot={dataBooking?.timeslot}
                            price={props.price}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        </div >
    )
}

export default ModalBooking