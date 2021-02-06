import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Col, Input, Button, Modal, ModalBody } from 'reactstrap';
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
// import User from '../../../assets/img/user.png'
import { GetProfile, UpdateProfile } from '../../../redux/actions/profile'
import swal from 'sweetalert'
import axios from 'axios'
import Feedback from './feedback'
import { Link } from 'react-router-dom';
import Loading from '../../loading/loading';

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

    const [bookHistory, setBookHistory] = useState([]);
    const urlBookHistory = 'https://soka.kuyrek.com:3003/booking/history';
    const token2 = localStorage.getItem('token');
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            Authorization: `bearer ${token2}`
        }
    }

    const getBookHistory = () => {
        axios
            .get(urlBookHistory, config)
            .then((res) => {
                console.log('ini res history Book: ', res.data.data)
                setBookHistory(res.data.data)
                setLoading(true)
            })
            .catch(() => {
                swal({
                    icon: "warning",
                    title: "Failed to get data",
                    text: "Please wait",
                    type: "warning",
                    buttons: false,
                    timer: 3000,
                });
            })
    }
    useEffect(() => {


        dispatch(GetProfile());
        getBookHistory()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submitted]);

// console.log('book history: ',bookHistory)

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
                                <Button color="link" className="btn editBio" onClick={toggle} style={{ textDecoration: 'none' }}>Edit Profile</Button>
                                <Modal isOpen={modal} toggle={toggle} className={className}>
                                    <ModalBody className="modal-body-edit-profile" toggle={toggle} close={closeBtn}>
                                        <h4 className="edit-title-big" >Edit Profile</h4>
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
                                                            placeholder="Enter Your Description Here...."
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
                                {bookHistory && loading ? (
                                bookHistory.length === 0 ? (<p style={{paddingTop: '50px', textAlign: 'center', fontSize: '20px', fontWeight: 'lighter'}}>No Booking History</p>) : (
                                bookHistory.slice(bookHistory.length-3, bookHistory.length).reverse().map((history, idx) => (
                                <div class="card text-center" key={idx}
                                style={{marginTop: '20px'}}>
                                    <div class="card-body">
                                        <div className="contentCard">
                                            <h5 className="headerCard">{history.field}</h5>
                                            {/* <h5 className="status"></h5> */}
                                            <small className="date">{history.date.slice(0,10)}</small>
                                            {/* <Link >
                                                <button className="btn player">Give Feedback</button>
                                            </Link> */}
                                            <Feedback 
                                            id={history.id}
                                            done={history.transaction}
                                            />
                                            <Link 
                                            to={`field-details/${history.id_field}`} 
                                            style={{ textDecoration: 'none' }}>
                                            <p className="footerCard">View Field Details</p>
                                            </Link>
                                            {/* {history.transaction === true ? (<p className="footerCard">Give Feedback</p>) : (<p className="footerCard">Coming Up Match</p>)} */}
                                        </div >
                                    </div >
                                </div >
                                ))) ): (<Loading />)}
                            </div >
                        </div>
                    </aside>
                </Container>
            </div>
        </div >
    )
}
export default Bio;
