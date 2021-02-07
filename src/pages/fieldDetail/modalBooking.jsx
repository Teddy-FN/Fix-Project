import React, { useState, useEffect } from 'react'
import { Modal, Button, Col, Row} from 'react-bootstrap'
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
import Logo from '../../assets/img/logo.png';
import Barcode from 'react-barcode';






const ModalBooking = (props) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showTiket, setShowTiket] = useState(false);
    const handleCloseTiket = () => setShowTiket(false);
    const handleShowTiket = () => setShowTiket(true);
    const [dataBooking, setDataBooking] = useState([]);
    // console.log('props modal booking: ',props.id)
    // let price = props.price
    console.log('data price: ', props)
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

    
    const config ={
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
            console.log('respon timeslot: ',res)
            setTimeslot(res.data.available_timeslot)
            setTimeslotId(res.data.id_timeslot)
        })
        .catch((err) => {
            console.log('error timeslot: ',err)
        })
    }
    
    const idTimeslot = selectedTime.map((id => (id.id)))
    const dataIdTime = idTimeslot.join()
    // console.log('id timeslot: ', dataIdTime)
    
    const submitBooking = (e) => {
        e.preventDefault();
        const dataBooking = {
            date: dates,
            id_timeslot: dataIdTime
        }
        axios
        .post(urlBooking, dataBooking, config)
        .then((res) => {
            console.log('respon booking: ',res)
            swal({
                icon: "success",
                title: "Your Booking is Succes",
                text: "Happy playing",
                type: "success",
                buttons: false,
                timer: 3000,
              });
            setDataBooking(res.data.result);
            setShowTiketModal(true);
            // setShowTiket(true);
        })
        .catch((err) => {
            console.log('error booking: ',err)
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

    // let datePlay = `${dataBooking.date.getFullYear()}-${dataBooking.date.getMonth() + 1}-${dataBooking.date.getDate()}`

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
                    {/* <div className="multistep"> */}
                        {/* <Steps>  */}
                            {/* <Step component={UserInfo} />  */}
                            {/* <Step component={SetDateTime} id={props.id}/>
                            <Step component={Confirm} />
                            <Step component={Success} /> */}
                        {/* </Steps>                         */}
                    {/* </div> */}
                    <div>
                <h5>Choose your dateFormat:</h5>
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
                <h5>Choose your timeslot:</h5>
                <MultiSelect className="multi-option"
                    options={timeslot.map((time, idx) => {
                        return ({label: time, value:  time, id: timeslotId[idx]})
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
            <Button className="submit-data"  variant='link' type='submit' onClick={submitBooking} style={{ textDecoration: 'none' }}>Submit</Button>
            {showTiketModal === true ? (
                <Button className="submit-data"  variant='link' type='submit' onClick={handleShowTiket} style={{ textDecoration: 'none' }}>See eTiket</Button>
            ) : (<p></p>)}
            
                </Modal.Body>
            )}
        </Modal>

                    {/* Modal eTiket */}
        {/* =================================================================================================== */}
        <div className='modal-tiket'>
        <Modal
            
            show={showTiket}
            onHide={handleCloseTiket}
        >
            <Modal.Body>
                <div style={{textAlign: 'center', marginBottom: '-5px'}} className='tiket-logo'>
                    <img 
                        class="logo" 
                        src={Logo} 
                        alt='logo'
                    ></img>
                </div>
                    <p
                        style={{
                            paddingTop: '5px',
                            fontSize: '30px',
                            textAlign: 'center'
                        }}
                    >Game, Set , Match</p>
                    <hr className='border-tiket'></hr>
                <div>
                    <div style={{paddingLeft: '5px'}}>
                    <Row>
                        <Col>
                            <Row>ID of Booking: </Row>
                            <Row>Name:</Row>
                            <Row>Field Name :</Row>
                            <Row>Date of Play : </Row>
                            <Row>Hours of Play:</Row>
                        </Col>
                        <Col>
                            <Row>{dataBooking.id} </Row>
                            <Row>{dataBooking.fullname}</Row>
                            <Row>{dataBooking.field}</Row>
                            <Row>{dataBooking.date} </Row>
                            <Row>{dataBooking.timeslot}</Row>
                        </Col>
                    </Row>
                    </div>
                    <hr></hr>
                    <Row>
                        <Col></Col>
                        {/* <Col>Total Price: Rp {price.price.$numberDecimal}.000</Col> */}
                    </Row>
                    <div style={{textAlign: 'center'}}>
                        <Barcode value='{dataBooking.id}' />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </div>
    </div>
)
}

export default ModalBooking;