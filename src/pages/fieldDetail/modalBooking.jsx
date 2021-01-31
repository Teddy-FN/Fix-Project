import React, { useState } from 'react'
import { Modal, ModalBody, Button, Col } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import MultiSelect from 'react-multi-select-component'

const ModalBooking = (props) => {
    // const [modalBooking, setModalBooking] = useState(false);
    // const toggleBooking = () => setModalBooking(!modalBooking);
    // const [modalConfirm, setModalConfirm] = useState(false);
    // const toggleBooking2 = () => setModalConfirm(true);
    // const handleClose = () => setModalConfirm(false);

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState (false);
    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true); 
    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);

    const [selectedDate, setSelectedDate] = useState(null);

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
            <div>
            <Button className='col-12 mb-3 btn-book' onClick={handleShow}>
                Book
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
            >
                {props.isLogin !== true ? (
                <div>
                    <ModalBody>
                    {/* <Row>
                        <Col>
                        <Button
                            onClick={toggleBooking}
                            close
                            aria-label="Cancel"
                        >
                            <span aria-hidden>
                            <i class="fas fa-times-circle"></i>
                            </span>
                        </Button>
                        </Col>
                    </Row> */}
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
                    </ModalBody>
                </div>
                ) : (
                    <ModalBody>
                        <div>
                            <h5 class="choose-title">Choose your date:</h5>
                            <DatePicker className="calendar"
                              selected={selectedDate}
                              onChange={date => setSelectedDate(date)}
                              dateFormat='dd/MM/yyyy'
                              minDate={new Date()}
                            />
                        </div>
                        <div>
                            <h5 class="choose-title">Choose your timeslot:</h5>
                            <MultiSelect className="multi-option"
                              options={options}
                              value={selectedTime}
                              onChange={setSelectedTime}
                              labelledBy={"Select"}
                            />
                        </div>
                            <Button onClick={handleShow1} class="next round">&#8250;</Button>
                            <Modal show={show1} onHide={handleClose1}>
                                <ModalBody>
                                    <h6>Name: </h6>
                                    <h6>Field: </h6>
                                    <h6>Choosen date:</h6>
                                    <h6>Choosen time:</h6>
                                    <Button onClick={handleShow1} class="prev round">&#8249;</Button>
                                    <Button onClick={handleShow2} class="next round">&#8250;</Button>
                                    <Modal show={show2} onHide={handleClose2}>
                                        <ModalBody>
                                            <div>
                                                <h3> We already receive your data, your booking id is:</h3>
                                            </div>
                                            <Button variant="secondary" onClick={handleClose2}>Close</Button>
                                        </ModalBody>
                                    </Modal>
                                </ModalBody>
                            </Modal>
                    </ModalBody>
                )}
                
            </Modal>
            
            </div>
    )

}

export default ModalBooking;