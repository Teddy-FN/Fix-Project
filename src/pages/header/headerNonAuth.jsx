import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../../assets/img/logo.png'
import '../header/header.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { handler } from '../../provider'

const HeaderNonAuth = (props) => {
    const {
        className
    } = props;

    const [modalRegist, setModalRegist] = useState(false);
    const toggleRegist = () => setModalRegist(!modalRegist);

    const [modalLogin, setModalLogin] = useState(false);
    const toggleLogin = () => setModalLogin(!modalLogin);

    const [token] = useState('');

    let auth = localStorage.getItem("token");
    console.log('auth', auth);

    const { logged, setLogged } = useContext(handler)

    // Logic Register And Login 
    // Set State
    // const [regist, setRegist] = useState('')

    const handleOnSubmitSignUp = (e) => {
        e.preventDefault();
        console.log('Email :', e.target.email.value);
        console.log('Full Name :', e.target.fullname.value);
        console.log('Password :', e.target.password.value);
        console.log('Password  :', e.target.passwordConfirmation.value);

        const userDataLogIn = {
            email: e.target.email.value,
            fullname: e.target.fullname.value,
            password: e.target.password.value,
            passwordConfirmation: e.target.passwordConfirmation.value
        };

        // const urlApiSignup = '13.229.66.0:3005/signup';
        // const urlApiSignup = 'http://54.251.238.126:3005/signup';
        axios.post('http://54.251.238.126:3005/signup', userDataLogIn)
            .then((resultRegister) => {
                localStorage.setItem('token', resultRegister.data.token)
                console.log('result', resultRegister)
            })
            .then(err => {
                console.log(err)
            });
    }

    // LOGIN
    const [login, setLogin] = useState('')
    const handleSubmitLogin = (event) => {
        event.preventDefault()
        console.log('Login Email :', event.target.email.value)
        console.log('Login Password :', event.target.password.value)

        const userLogin = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        axios.post('http://54.251.238.126:3005/login', userLogin)
            .then((dataResult) => {
                localStorage.setItem('token', dataResult.data.token)
                console.log('DATA RESULT', dataResult)
            })
            .then(err => {
                setLogged(true)
                console.log('error', err)
            });
    };
    console.log("token", token);

    return (
        <nav class="navbar navbar-expand-lg">
            <Link to="/"><img class="logo" src={Logo}></img></Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <Link to="/browseFields">
                            <a class="nav-link" href="#">Browse <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Button class="btn-header" style={{ color: 'white' }} color="link" onClick={toggleRegist}>Sign Up</Button>
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
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Write your password here"

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordConfirmation">Confirm Password</Label>
                                <Input className="modal-form" style={{ backgroundColor: '#545454', color: 'white' }}
                                    type="password"
                                    name="passwordConfirmation"
                                    id="passwordConfirmation"
                                    placeholder="Verify your password"

                                />
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
                <Button class="btn-header" style={{ color: 'white' }} color="link" onClick={toggleLogin}>Log In</Button>
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
                                    type="password"
                                    name="password"
                                    id="password"
                                />
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