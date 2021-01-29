import React, { useState } from 'react'
import { Modal, ModalBody, Button, Row, Col } from 'reactstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Container } from 'react-bootstrap'

const ModalBooking = (props) => {
    const [modalBooking, setModalBooking] = useState(false);
    const toggleBooking = () => setModalBooking(!modalBooking);

    const [selectedDate, setSelectedDate] = useState(null)

    return (
            <div>
            <Button className='col-12 mb-3 btn-book' onClick={toggleBooking} target="#modal-book1" >
                Book
            </Button>
            <Modal
                isOpen={modalBooking}
                toggle={toggleBooking}
            >
                {props.isLogin !== true ? (
                <div>
                <Modal>
                    <ModalBody>
                    <Row>
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
                    </Row>
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
                </Modal>
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
                        </div>
                        <a className="button-next" href="#" class="next round">&#8250;</a>
                    </ModalBody>
                )}
            </Modal>
            </div>
    )

}

export default ModalBooking;