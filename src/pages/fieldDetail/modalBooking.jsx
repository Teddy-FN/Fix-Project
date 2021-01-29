import React, { useState } from 'react'
import { Modal, ModalBody, Button, Col } from 'react-bootstrap'
import { Steps, Step } from "react-step-builder"
import UserInfo from '../booking/component/userInfo'
import SetDateTime from '../booking/component/setDateTime'
import Confirm from '../booking/component/confirm'
import Success from '../booking/component/success'

const ModalBooking = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <div className="multistep">
                            <Steps>
                                <Step component={UserInfo} />
                                <Step component={SetDateTime} />
                                <Step component={Confirm} />
                                <Step component={Success} />
                            </Steps>
                        </div>
                    </ModalBody>
                )}
            </Modal>
            
            </div>
    )

}

export default ModalBooking;