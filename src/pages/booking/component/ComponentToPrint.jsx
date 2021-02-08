import React from 'react'

import Logo from '../../../assets/img/logo.png';
import Barcode from 'react-barcode';
import {
    Col,
    Row,
} from 'react-bootstrap'

class ComponentToPrint extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showTiket: false,
            handleCloseTiket: false,
            id: props.id,
            fullname: props.fullname,
            field: props.field,
            date: props.date,
            timeslot: props.timeslot,
            price: props.price,
        }
        console.log('PROPS CLASS COMPONENT', props.data)
    }

    render() {

        return (
            <div>
                <div className='modal-tiket'>
                    <div style={{ textAlign: 'center', marginBottom: '-5px' }} className='tiket-logo'>
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
                        <div style={{ paddingLeft: '5px' }}>
                            <Row>
                                <Col style={{ padding: '20px', marginLeft: '20px' }}>
                                    <Row>ID of Booking: </Row>
                                    <Row>Name:</Row>
                                    <Row>Field Name :</Row>
                                    <Row>Date of Play : </Row>
                                    <Row>Hours of Play:</Row>
                                    <Row>Total Payment:</Row>
                                </Col>
                                <Col style={{ padding: '20px' }}>
                                    <Row>{this.state.id} </Row>
                                    <Row>{this.state.fullname}</Row>
                                    <Row>{this.state.field}</Row>
                                    <Row>{this.state.date.slice(0, 10)} </Row>
                                    <Row>{this.state.timeslot.join()}</Row>
                                    <Row>Rp. {this.state.price * this.state.timeslot.length}.000</Row>
                                </Col>
                            </Row>
                        </div>
                        <hr></hr>
                        <Row>
                            <Col></Col>
                        </Row>
                        <div style={{ textAlign: 'center' }}>
                            <Barcode value={this.state.id} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ComponentToPrint;