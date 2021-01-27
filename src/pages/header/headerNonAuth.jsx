/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../../assets/img/logo.png'
import '../header/header.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { handler } from '../../provider'
import ShowPasswordToogle from './showPasswordToogle/showPasswordToogle'
import { USER_LOG_IN, USER_SIGNUP } from '../../redux/actions/types'

const HeaderNonAuth = (props, { userLogin }) => {
    const {
        className
    } = props;
    const { logged, setLogged, modalLoginUser, setModalLoginUser, modalSignUpUser, setModalSignUpUser } = useContext(handler)
    const dispatch = useDispatch()

    const [modalRegist, setModalRegist] = useState(false);
    const toggleRegist = () => {
        setModalSignUpUser(true)
        setModalRegist(!modalRegist)
    };

    const [modalLogin, setModalLogin] = useState(false);
    const toggleLogin = () => { setModalLogin(!modalLogin); setModalRegist(!modalRegist) };

    const [token] = useState('');

    let auth = localStorage.getItem("token");
    console.log('auth', auth);

    const [passwordInputType, ToogleIcon] = ShowPasswordToogle()

    // Logic Register And Login 
    // Set State
    // const [regist, setRegist] = useState('')


    // const signUpBtn = useSelector(state => state)
    // useEffect(() => {

    // })

    const handleOnSubmitSignUp = (e) => {
        e.preventDefault();

        const userRegister = {
            email: e.target.email.value,
            fullname: e.target.fullname.value,
            password: e.target.password.value,
            passwordConfirmation: e.target.passwordConfirmation.value
        };
        dispatch({ type: USER_SIGNUP, payload: userRegister })
    }

    // LOGIN
    const [login, setLogin] = useState('')
    const handleSubmitLogin = (event) => {
        event.preventDefault()
        const userLogin = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        dispatch({ type: USER_LOG_IN, payload: userLogin })
    };
    console.log("token", token);

    return (
        <nav class="navbar navbar-expand-lg fixed-top" style={{ boxShadow: '3px 3px 5px #222222' }}>
            <Link to="/"><img class="logo" src={Logo}></img></Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto" style={{textDecoration: 'none'}}>
                    <li class="nav-item active">
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <a class="nav-link" href="#" >Home <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active" >
                        <Link to="/browseFields" style={{textDecoration: 'none'}}>
                            <a class="nav-link" href="#" style={{textDecoration: 'none'}}>Browse <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <li class="btn-header active" style={{ color: 'white', textDecoration: 'none', listStyle: 'none' }} color="link" onClick={toggleRegist}><a href='#' style={{textDecoration: 'none', color: 'white'}} className='btn-header'>Sign Up</a></li>
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
                                    type={passwordInputType}
                                    name="passwordConfirmation"
                                    id="passwordConfirmation"
                                    placeholder="Verify your password"
                                />
                                <span className="passwordConfirmationToogle">{ToogleIcon}</span>
                            </FormGroup>
                            <Button type="submit" className="submit-button" style={{ backgroundColor: '#28df99' }}>Sign Up</Button>
                            <br />
                            <br />
                            <p class="para" >Or</p>
                            <Button className="facebook-button" style={{ backgroundColor: '#3b5998' }}>Sign Up with Facebook</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="modal-foter">
                        <span class="statement" >Have account? <Button color="link" style={{ color: '#28df99' }} onClick={toggleLogin}>Log In</Button></span>
                    </ModalFooter>
                </Modal>
            </div>
            <div >
                <li class="btn-header" style={{ color: 'white', textDecoration: 'none', listStyle: 'none' }} color="link" onClick={toggleLogin}><a href='#' style={{textDecoration: 'none', color: 'white'}} className='btn-header'>Login</a></li>
                <Modal isOpen={modalLogin} toggle={toggleLogin}>
                    <ModalBody className="modal-body">
                        <h4 class="modal-title">Log In</h4>
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
                            <Button className="facebook-button" style={{ backgroundColor: '#3b5998' }} onClick={toggleLogin}>Log In with Facebook</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="modal-footer">
                        <span class="statement">Don't have an account? <Button className="crosing-button" style={{ color: '#28df99' }} color="link" onClick={toggleRegist}>Sign Up</Button></span>
                    </ModalFooter>
                </Modal>
            </div>
        </nav>
    )
}

export default HeaderNonAuth