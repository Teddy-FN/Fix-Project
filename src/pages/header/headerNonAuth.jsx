/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../../assets/img/logo.png'
import '../header/header.css'
import { Button, Modal, ModalBody, Label, Input, FormGroup, Form } from 'reactstrap'
import axios from 'axios'
import { Link, Router, Switch, Route, useHistory } from 'react-router-dom'
// Icon Show password
import ShowPasswordToogle from './showPasswordToogle/showPasswordToogle'
// redux Saga
import { handler } from '../../provider'
import { login, SignUp, loginGoogle } from '../../redux/actions/auth'
import swal from 'sweetalert'
// Animation
import AOS from "aos";
import "aos/dist/aos.css";
// Google 
import { GoogleLogin } from 'react-google-login'


const HeaderNonAuth = () => {

    const { logged, setLogged, modalLoginUser, setModalLoginUser, modalSignUpUser, setModalSignUpUser } = useContext(handler)
    const dispatch = useDispatch()

    const [modalRegist, setModalRegist] = useState(false);
    const toggleRegist = () => {
        setModalSignUpUser(true)
        setModalRegist(!modalRegist)
    };
    const [tokenLogin, setTokenLogin] = useState(localStorage.getItem('token'))

    const [modalLogin, setModalLogin] = useState(false);
    const toggleLogin = () => {
        setModalLogin(!modalLogin)
        setModalRegist(false)
    };

    const [token] = useState('');
    const [passwordInputType, ToogleIcon] = ShowPasswordToogle()
    const [passwordConfirm, setPasswordConfirm] = ShowPasswordToogle()
    // Animation 
    useEffect(() => {
        // Antimation 
        AOS.init({
            duration: 4000
        })
    })

    // Register
    const handleOnSubmitSignUp = async (event) => {
        event.preventDefault()
        setLoading(true)
        await dispatch(SignUp({
            email: event.target.email.value,
            fullname: event.target.fullname.value,
            password: event.target.password.value,
            passwordConfirmation: event.target.passwordConfirmation.value
        }))
            .then(
                setModalRegist(false),
                swal({
                    icon: "success",
                    title: "Register Succes",
                    text: "you can log in now",
                    type: "success",
                    buttons: false,
                    timer: 2000,
                })
            )
        console.log('Ini Event', event)
    };

    // LOGIN
    const [loading, setLoading] = useState(false)
    const dataLogin = useSelector(state => state)
    const history = useHistory()
    const handleSubmitLogin = async (event) => {
        event.preventDefault()
        setLoading(true)
        await dispatch(login({
            email: event.target.email.value,
            password: event.target.password.value
        }))
            .then((e) => {
                if (e !== '') {
                    history.push('/')
                    localStorage.setItem('token', e)
                    swal({
                        icon: "success",
                        title: "Success Login",
                        text: "let's book a field",
                        type: "success",
                        buttons: false,
                        timer: 3000,
                    });
                    setLoading(false)
                    window.location.reload()
                } else {
                    swal({
                        icon: "error",
                        title: "Wrong email or password",
                        text: "Please try again",
                        type: "warning",
                        buttons: false,
                        timer: 2000,
                    });
                    setLoading(false)
                }
            })
    };
    console.log("token", token);

    // Login Google
    const handleGoogleLogin = async (e) => {
        console.log("HANDLE LOGIN", e)
        await dispatch(loginGoogle(e))
        setLoading(true)
    }


    return (
        <nav class="navbar navbar-expand-lg fixed-top" style={{ boxShadow: '5px 5px 5px black' }}>
            <Link to="/"><img class="logo" src={Logo}></img></Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto" style={{ textDecoration: 'none' }}>
                    <li class="nav-item active">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <a class="nav-link" href="#" >Home <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active" >
                        <Link to="/browseFields" style={{ textDecoration: 'none' }}>
                            <a class="nav-link" href="#" style={{ textDecoration: 'none' }}>Browse <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <div data-aos="fade-left"> */}
            <h4 class="btn-header1" style={{ color: 'white', cursor: 'pointer' }} color="link" onClick={toggleRegist}>Sign Up</h4>
            <Modal isOpen={modalRegist} toggle={toggleRegist}>
                <ModalBody className="modal-body">
                    <h4 class="modal-title"> Sign Up</h4>
                    <br />
                    <Form onSubmit={handleOnSubmitSignUp}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input className="modal-form" style={{ backgroundColor: '#545454', color: 'white' }}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Write your email here"
                            />
                        </FormGroup>
                        <FormGroup >
                            <Label className="label" for="fullname">Full Name</Label>
                            <Input className="modal-form" style={{ backgroundColor: '#545454', color: 'white' }}
                                type="text"
                                name="fullname"
                                id="fullname"
                                placeholder="Write your full name here"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input className="modal-form" style={{ backgroundColor: '#545454', color: 'white' }}
                                type={passwordInputType}
                                name="password"
                                id="password"
                                placeholder="Write your password here"
                            />
                            <span className="passwordToogle">{ToogleIcon}</span>
                        </FormGroup>
                        <FormGroup>
                            <Label for="passwordConfirmation">Confirm Password</Label>
                            <Input className="modal-form" style={{ backgroundColor: '#545454', color: 'white' }}
                                type={passwordConfirm}
                                name="passwordConfirmation"
                                id="passwordConfirmation"
                                placeholder="Verify your password"
                            />
                            <span className="passwordConfirmationToogle">{setPasswordConfirm}</span>
                        </FormGroup>
                        <br />
                        <Button type="submit" className="submit-button" style={{ backgroundColor: '#28df99' }}>Sign Up</Button>
                        <br />
                        <br />
                        <p class="para" >Or</p>
                        <Button className="google-button" style={{ backgroundColor: 'white', color: 'black' }}>Sign Up with Google</Button>
                    </Form>
                    <span class="statement" >Have account? <Button color="link" style={{ color: '#28df99' }} onClick={toggleLogin}>Log In</Button></span>
                </ModalBody>
            </Modal>
            {/* </div> */}
            <div >
                {
                    token ?
                        <div>nama</div> :
                        null
                }
                <h4 class="btn-header2" style={{ color: 'white', cursor: 'pointer' }} color="link" onClick={toggleLogin}>Log In</h4>
                <Modal isOpen={modalLogin} toggle={toggleLogin}>
                    <ModalBody className="modal-body">
                        <h4 class="modal-title">Log In</h4>
                        <br></br>
                        <Form onSubmit={handleSubmitLogin}>
                            <FormGroup>
                                <Label for="emailUser">Email</Label>
                                <Input className="modal-form" style={{ backgroundColor: '#545454', color: 'white' }}
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordUser">Password</Label>
                                <Input className="modal-form" style={{ backgroundColor: '#545454', color: 'white' }}
                                    type={passwordInputType}
                                    name="password"
                                    id="password"
                                />
                                <span className="passwordLogInToogle">{ToogleIcon}</span>
                            </FormGroup>
                            <br />
                            <Button type="submit" className="submit-button" style={{ backgroundColor: '#28df99' }} onClick={toggleLogin}>Log In</Button>
                            <br />
                            <br />
                            <p class="para">Or</p>
                            <Button className="google-button" style={{ backgroundColor: 'white', color: 'black' }} onClick={toggleLogin} >Log In with Google</Button>
                            {/* <GoogleLogin
                                clientId="548645407023-l8n4p4pia7mclrheramf7knu2f5b6cve.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={handleGoogleLogin}
                                onFailure={handleGoogleLogin}
                                cookiePolicy={'single_host_origin'}
                                className="googleAuth"
                            /> */}
                            {/* <Button className="google-button" style={{ backgroundColor: '#3b5998' }} >Log In with Facebook</Button> */}
                        </Form>
                        <span class="statement">Don't have an account? <Button className="crosing-button" style={{ color: '#28df99' }} color="link" onClick={toggleRegist}>Sign Up</Button></span>
                    </ModalBody>
                </Modal>
            </div>
        </nav>
    )
}

export default HeaderNonAuth