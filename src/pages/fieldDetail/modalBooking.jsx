import React, { useState } from 'react';
import { Modal, ModalBody, Button, Row, Col } from "reactstrap";
// import Booking from '../booking/compiler';

const ModalBooking = (props) => {
    const [modalBooking, setModalBooking] = useState(false);
    const toggleBooking = () => setModalBooking(!modalBooking);

    return (
            <div>
            <Button className='col-12 mb-3 btn-book' onClick={toggleBooking}>
                Book Now
            </Button>
            <Modal
                isOpen={modalBooking}
                toggle={toggleBooking}
                id="modal-book"
            >
                {props.isLogin !== true ? (
                <div>
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
                </div>
                ) : (
                    <ModalBody>
                        {/* <Booking /> */}
                        mulistep here
                    </ModalBody>
                )}
            </Modal>
            </div>
    )

}

export default ModalBooking;