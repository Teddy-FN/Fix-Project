import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Col, Input, Button, Modal, ModalBody } from 'reactstrap';
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import User from '../../../assets/img/user.png'
import { Link } from 'react-router-dom'
import { GetProfile, UpdateProfile } from '../../../redux/actions/profile'

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
    }

    useEffect(() => {
        dispatch(GetProfile());
    }, [submitted]);


    return (
        <div>
<<<<<<< HEAD
            {props.isLogin !== true ? (
                <div>
                    <Col>
                        <h3 style={{ textAlign: "center", marginTop: '150px' }}>
                            Hello guest, <br />
                        please log in first <br />
                        as user!!
                        </h3>
                    </Col>
                </div>
            ) : (
                    <div className="subMenu">
                        <Container>
                            <aside className="leftSide">
                                <div>
                                    <div className="profile">
                                        <img src={User} alt="" className="photo" />
                                    </div>
                                    <h4>{user?.fullname}</h4>
                                    <div className="desc">
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
=======
            <div className="subMenu">
                <Container>
                    <aside className="leftSide">
                        <div>
                            <div className="profile">
                                <img src={`https://soka.kuyrek.com:3005/${user.profilePic}`} alt="" className="photo" />
                            </div>
                            <h4>{user?.fullname}</h4>
                            <div className="desc">
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
                                                    <Label sm={3}>Img :</Label>
                                                    <Col sm={8}>
                                                        <Input
                                                            type="file"
                                                            name="profilePic"
                                                            id="profilePic"
                                                            onChange={handlePicture}
                                                        />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row className="edit-form-name">
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
                                                </FormGroup>
                                                <FormGroup row className="edit-form-name">
                                                    <Label sm={3}>phone :</Label>
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
                                                    <Label sm={3}>Full Name :</Label>
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
>>>>>>> 6afbef21c27a2e26489d9ada48fd93adb3db5473
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
<<<<<<< HEAD
                            </aside>
                        </Container>
                    </div>)}
=======
                            </div >
                        </div>
                    </aside>
                </Container>
            </div>
>>>>>>> 6afbef21c27a2e26489d9ada48fd93adb3db5473
        </div >
    )
}
export default Bio;
