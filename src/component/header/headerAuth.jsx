import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../../assets/logo.png'
import Profile from '../../assets/profile.jpg'
import '../header/header.css'

const HeaderAuth = () => {
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
                <div class="dropdown">
                    <img src={Profile} class="img-button dropdown-toggle" color="link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Profile</a>
                        <a class="dropdown-item" href="#">Setting</a>
                        <a class="dropdown-item" href="#">Log Out</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderAuth