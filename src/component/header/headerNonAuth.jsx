import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../../assets/logo.png'
import '../header/header.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label, Input, FormGroup } from 'reactstrap'

const HeaderNonAuth = () => {
    const [modalRegist, setModalRegist] = useState(false);
    const toggleRegist = () => setModalRegist(!modalRegist);
    
    const [modalLogin, setModalLogin] = useState(false);
    const toggleLogin = () => setModalLogin(!modalLogin);

    return(
        <nav class="navbar navbar-expand-lg">
            <img class="logo" src={Logo}></img>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Browse <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
            <div>
                <Button class="btn" color="link" onClick={toggleRegist}>Sign Up</Button>
                    <Modal isOpen={modalRegist} toggle={toggleRegist}>
                        <ModalHeader class="modal-header" toggle={toggleRegist}>Sign Up</ModalHeader>
                        <ModalBody className="modal-body">
                            <FormGroup >
                                <Label className="label" for="fullName">Full Name</Label>
                                <Input className="form"
                                    type="name"
                                    name="name"
                                    id="userName"
                                    
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="emailUser">Email</Label>
                                <Input className="form"
                                    type="email"
                                    name="email"
                                    id="emailUser"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordUser">Password</Label>
                                <Input className="form"
                                    type="password"
                                    name="password"
                                    id="passwordUser"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordUser">Confirm Password</Label>
                                <Input className="form"
                                    type="password"
                                    name="password"
                                    id="passwordUser"
                                />
                            </FormGroup>
                            <Button className="submit-button" onClick={toggleRegist}>Sign Up</Button>
                            <br />
                            <br />
                            <p class="para" >Or</p>
                            <Button className="facebook-button" onClick={toggleLogin}>Sign Up with Facebook</Button>
                        </ModalBody>
                        <ModalFooter className="modal-foter">
                            <span class="statement" >Have account? <Button color="link" onClick={toggleLogin}>Log In</Button></span>
                        </ModalFooter>
                    </Modal>
            </div>
            <div >
                <Button class="btn" color="link" onClick={toggleLogin}>Log In</Button>
                    <Modal isOpen={modalLogin} toggle={toggleLogin}>
                        <ModalHeader class="modal-header" toggle={toggleLogin}>Log In</ModalHeader>
                        <ModalBody className="modal-body">
                            <FormGroup>
                                <Label for="emailUser">Email</Label>
                                <Input className="form"
                                    type="email"
                                    name="email"
                                    id="emailUser"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordUser">Password</Label>
                                <Input className="form"
                                    type="password"
                                    name="password"
                                    id="passwordUser"
                                />
                            </FormGroup>
                            <br />
                            <Button className="submit-button" onClick={toggleLogin}>Log In</Button>
                            <br />
                            <br />
                            <p class="para">Or</p>
                            <Button className="facebook-button" onClick={toggleLogin}>Log In with Facebook</Button>
                        </ModalBody>
                        <ModalFooter className="modal-footer">
                            <span class="statement">Don't have an account? <Button className="crosing-button" color="link" onClick={toggleRegist}>Sign Up</Button></span>
                        </ModalFooter>
                    </Modal>
                </div>
        </nav>
    )
}

export default HeaderNonAuth