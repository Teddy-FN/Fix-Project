import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Col, Input, Button, Modal, ModalBody } from 'reactstrap';
import './style.css'
// import User from '../../../assets/img/user.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { useSelector, useDispatch } from "react-redux";
import StepThree from '../../booking/stepThree/'

function Bio(props) {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    const token = localStorage.getItem('token')
    console.log(token)
    const id = localStorage.getItem('id')
    console.log('Id User', id)



    // Get data user    
    const [user, setUser] = useState([])

    // Edit Profile User
    const [editUser, setEditUser] = useState([])

    // const [loading, setLoading] = useState(false)
    const url = `https://soka.kuyrek.com:3005/user/profile`;
    useEffect(() => {
        axios.get(url
            , {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            // console.log("Response", res)
            // setLoading(true);
            setUser(res.data.data);
        })
            .catch(error => {
                console.log(error)
            })
    }, )


    console.log('User Info', editUser) // Line 29
    // Edit User Profile 
    const handleChangeBio = e => {
        e.preventDefault()
        console.log('Change Profile', e.currentTarget.value);
        editUser(e.currentTarget.value);
        axios.put(`https://soka.kuyrek.com:3005/user/edit`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((userProfile) => {
                console.log(userProfile)
                setEditUser(userProfile)
            })
    }

    return (
        <div>
            <div className="subMenu">
                <Container>
                    <aside className="leftSide">
                        <div>
                            <div className="profile">
                                <img src={`https://soka.kuyrek.com:3005/${user.image}`} alt="" className="photo" />
                            </div>
                            <h4>{user?.fullname}</h4>
                            <div className="desc">
                                <h4>Description</h4>
                                <p>{user?.description}</p>
                            </div>
                            <div className="button" >
                                <Button color="link" className="btn editBio" onClick={toggle} style={{textDecoration: 'none'}}>Edit Profile</Button>
                                <Modal isOpen={modal} toggle={toggle} className={className}>
                                    <ModalBody toggle={toggle} close={closeBtn}>
                                        <h4 className="edit-title" style={{textDecoration: 'none'}}>Edit Profile</h4>
                                        <br />
                                        <div>
                                            <Form onSubmit={handleChangeBio}>
                                                <FormGroup row className="edit-form-name">
                                                    <Label sm={3}>Email :</Label>
                                                    <Col sm={8}>
                                                        <Input
                                                            type="text"
                                                            name="email"
                                                            id="email"
                                                            placeholder="Enter Your Email Here...." />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row className="edit-form-name">
                                                    <Label sm={3}>password :</Label>
                                                    <Col sm={8}>
                                                        <Input
                                                            type="password"
                                                            name="password"
                                                            id="password"
                                                            placeholder="Enter Your New Password Here...." />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row className="edit-form-name">
                                                    <Label sm={3}>passwordConfirmation :</Label>
                                                    <Col sm={8}>
                                                        <Input
                                                            type="password"
                                                            name="passwordConfirmation"
                                                            id="passwordConfirmation"
                                                            placeholder="Confirmation New Password...." />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row className="edit-form-name">
                                                    <Label sm={3}>Full Name :</Label>
                                                    <Col sm={8}>
                                                        <Input
                                                            type="text"
                                                            name="fullname"
                                                            id="fullname"
                                                            placeholder="Enter Your Name Here...." />
                                                    </Col>
                                                </FormGroup>
                                                <Button color="link" className="edit-button-submit">Submit</Button>
                                            </Form>
                                        </div>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>
                    </aside>
                    <aside className="rightSide">
                        <div className="borderHistory">
                            <StepThree />
                            <div className="contentBorder">
                                <h5 className="headerBox">Book History</h5>
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div className="contentCard">
                                            <h5 className="headerCard">Field Name</h5>
                                            {/* <h5 className="status"></h5> */}
                                            <small className="date">2021-01-01</small>
                                            <Link to='player-list'>
                                                <button className="btn player">Player List</button>
                                            </Link>
                                            <p className="footerCard">Coming Up Match</p>
                                        </div >
                                    </div >
                                </div >
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div className="contentCard">
                                            <h5 className="headerCard">Field Name 2</h5>
                                            <h5 className="status">done</h5>
                                            <small className="date">2021-01-01</small>
                                            <Link to='player-list'>
                                                <button className="btn player">Player List</button>
                                            </Link>
                                            <p className="footerCard">Give Feedback</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div className="contentCard">
                                            <h5 className="headerCard">Field Name 3</h5>
                                            <h5 className="status">done</h5>
                                            <small className="date">2021-01-01</small>
                                            <Link to='player-list'>
                                                <button className="btn player">Player List</button>
                                            </Link>
                                            <p className="footerCard">Give Feedback</p>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </aside>
                </Container>
            </div>
        </div >
    )
}
export default Bio;