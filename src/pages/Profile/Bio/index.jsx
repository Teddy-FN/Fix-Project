import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Col, Input, Button, Modal, ModalBody } from 'reactstrap';
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import User from '../../../assets/img/user.png'
import { Link } from 'react-router-dom'
import { GetProfile, UpdateProfile } from '../../../redux/actions/profile'
import swal from 'sweetalert'

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
    const user = useSelector((state) => state.profileUser.data);
    console.log('Ini USer BROOOOO', user)


    // data patch profile
    const dispatch = useDispatch()
    const [picture, setPicture] = useState({
        profilePic: null
    })
    const [input, setInput] = useState({
        fullname: '',
        description: '',
        phone: '',
    });
    let formData = new FormData();
    formData.append("profilePic", picture.profilePic);
    formData.append("fullname", input.fullname);
    formData.append("description", input.description);
    formData.append("phone", input.phone);


    const handleChange = (name, value) => {
        setInput({
            ...input,
            [name]: value,
        });
    };

    const handlePicture = (e) => {
        setPicture({
            profilePic: e.target.files[0]
            // Kalau gambar dari 1 perlu di mapping di bagian belakang -> e.target.files.map(data => { setPicture ({profilepic: data})
        });
    };

    const [submitted, setSubmited] = useState(false);
    const HandleChangeProfile = (e) => {
        e.preventDefault();
        dispatch(UpdateProfile(formData))
        setSubmited(!submitted);
        setModal(false)
        swal({
            icon: "success",
            title: "Your Profile has been updated",
            text: "reaload the page to see changed",
            type: "success",
            buttons: false,
            timer: 3000,
        })
    }

    useEffect(() => {
        dispatch(GetProfile());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submitted]);


    return (
        <div>
            <div className="subMenu">
                <Container>
                    <aside className="leftSide">
                        <div>
                            <div className="profile">
                                <img src={`https://soka.kuyrek.com:3005/${user.profilePic}`} alt="" className="photo" />
                                {/* <img src={User} alt="" className="photo" /> */}
                            </div>
                            <h4>{user?.fullname}</h4>
                            <div className="desc">
                                <h4>Phone</h4>
                                <p>{user?.phone}</p>
                                <h4>Description</h4>
                                <p>{user?.description}</p>
                            </div>
                            <div className="button">
                                <Button color="link" className="btn editBio" onClick={toggle}>Edit Profile</Button>
                                <Modal isOpen={modal} toggle={toggle} className={className}>
                                    <ModalBody toggle={toggle} close={closeBtn}>
                                        <h4 className="edit-title">Edit Profile</h4>
                                        <br />
                                        <div>
                                            <Form onSubmit={HandleChangeProfile}>
                                                <FormGroup row className="edit-form-name">
                                                    <Label sm={3}>Image: </Label>
                                                    <Col sm={8}>
                                                        <Input
                                                            type="file"
                                                            name="profilePic"
                                                            id="profilePic"
                                                            onChange={handlePicture}
                                                        />
                                                    </Col>
                                                </FormGroup>
                                                {/* <FormGroup row className="edit-form-name">
                                                    <Label sm={3}>Email :</Label>
                                                    <Col sm={8}>
                                                        <Input
                                                            type="text"
                                                            name="email"
                                                            id="email"
                                                            placeholder="Enter Your Email Here...."
                                                            value={input.email}
                                                            onChange={(e) => handleChange("email", e.target.value)}
                                                        />

                                                    </Col>
                                                </FormGroup> */}
                                                <FormGroup row className="edit-form-name">
                                                    <Label sm={3}>Phone: </Label>
                                                    <Col sm={8}>
                                                        <Input
                                                            type="text"
                                                            name="phone"
                                                            id="phone"
                                                            placeholder="Enter Your Number Here...."
                                                            value={input.phone}
                                                            onChange={(e) => handleChange("phone", e.target.value)}
                                                        />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row className="edit-form-name">
                                                    <Label sm={3}>Full Name: </Label>
                                                    <Col sm={8}>
                                                        <Input
                                                            type="text"
                                                            name="fullname"
                                                            id="fullname"
                                                            placeholder="Enter Your Name Here...."
                                                            value={input.fullname}
                                                            onChange={(e) => handleChange("fullname", e.target.value)}
                                                        />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row className="edit-form-name">
                                                    <Label sm={3}>Description: </Label>
                                                    <Col sm={8}>
                                                        <Input
                                                            type="text"
                                                            name="desc"
                                                            id="desc"
                                                            placeholder="Enter Your Email Here...."
                                                            value={input.description}
                                                            onChange={(e) => handleChange("description", e.target.value)}
                                                        />

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
                            {/* <StepThree /> */}
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
