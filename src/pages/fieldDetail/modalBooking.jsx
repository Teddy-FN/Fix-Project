import React, { useState } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'
// import { Steps, Step } from "react-step-builder"
// import UserInfo from '../booking/component/userInfo'
// import SetDateTime from '../booking/component/setDateTime'
// import Confirm from '../booking/component/confirm'
// import Success from '../booking/component/success'
import './modalBooking.css'
import DatePicker from 'react-datepicker'
import MultiSelect from 'react-multi-select-component'





const ModalBooking = (props) => {
    const [selectedTime, setSelectedTime] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [date, setDate] = useState(new Date())
    console.log('props modal booking: ',props.id)

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


// Bikin method di dlm method dispatch
return (
        <div>
        <Button className='col-12 mb-3 book-field-button' variant="link" onClick={handleShow} style={{textDecoration: 'none'}}>
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
                <Modal.Body>
                    <div className="multistep">
                        {/* <Steps> */}
                            {/* <Step component={UserInfo} /> */}
                            {/* <Step component={SetDateTime} id={props.id}/>
                            <Step component={Confirm} />
                            <Step component={Success} /> */}
                        {/* </Steps> */}
                            <Row>
                            <h5>Choose your dateFormat:</h5>
                            </Row>
                            <Row>
                            <DatePicker className="dateFormat-picker"
                                selected={date}
                                onChange={date => setDate(date)}
                                dateFormat='yyyy-MM-dd'
                                minDate={new Date()}
                            />
                            </Row>
                            <Row>
                            <h5>Choose your timeslot:</h5>
                            </Row>
                            <Row>
                            <MultiSelect className="multi-option"
                                options={options}
                                value={selectedTime}
                                onChange={setSelectedTime}
                                labelledBy={"Select"}
                                style={{backgroudColor: 'black'}}
                            />
                            </Row>
                        
                    </div>
                </Modal.Body>
            )}
        </Modal>
    </div>
)
}

export default ModalBooking;