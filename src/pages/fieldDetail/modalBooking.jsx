import React, { useState } from 'react'
import { Modal, Button, Col } from 'react-bootstrap'
import { Steps, Step } from "react-step-builder"
// import UserInfo from '../booking/component/userInfo'
import SetDateTime from '../booking/component/setDateTime'
import Confirm from '../booking/component/confirm'
import Success from '../booking/component/success'
import './modalBooking.css'


const ModalBooking = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log('props modal booking: ',props.id)



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
                            <Steps>
                                {/* <Step component={UserInfo} /> */}
                                <Step component={SetDateTime} id={props.id}/>
                                <Step component={Confirm} />
                                <Step component={Success} />
                            </Steps>
                        </div>
                    </Modal.Body>
                )}
            </Modal>
        </div>
    )
}

export default ModalBooking;