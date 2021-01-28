/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../../assets/img/logo.png'
import Profile from '../../assets/img/profile.jpg'
import LandingPage from '../landingPage/landingPage'
import { Link, useHistory } from 'react-router-dom'
import '../header/header.css'
import { handler } from '../../provider/index'

const HeaderAuth = () => {
    const { logged, setLogged } = useContext(handler)
    const history = useHistory();
    const logOut = () => {
        localStorage.removeItem('token')
        setLogged(false)
        history.push('/');
    }

    return (
        <nav class="navbar navbar-expand-lg fixed-top" style={{ boxShadow: '5px 5px 5px black' }}>
            <Link to="/"><img class="logo" src={Logo}></img></Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto" >
                    <li class="nav-item active">
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <a class="nav-link" href="#" style={{textDecoration: 'none'}}>Home <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <Link to="/browseFields" style={{textDecoration: 'none'}}>
                            <a class="nav-link" href="#">Browse <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <div class="dropdown">
                    <img src={Profile} class="img-button dropdown-toggle" color="link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link to="/bio" style={{textDecoration: 'none'}}>
                            <a class="dropdown-item" href="#">Profile</a>
                        </Link>
                        <a class="dropdown-item" href="#">Setting</a>
                        <a class="dropdown-item" href="#" onClick={() => logOut()}>Log Out</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderAuth