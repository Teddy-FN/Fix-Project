/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../../assets/img/logo.png'
import Profile from '../../assets/img/profile.jpg'
import LandingPage from '../landingPage/landingPage'
import { Link, useHistory } from 'react-router-dom'
import '../header/header.css'
import { handler } from '../../provider/index'
import { login, SignUp, logoutUser } from '../../redux/actions/auth'
import { useSelector, useDispatch } from 'react-redux'
import { GetProfile } from '../../redux/actions/profile'

const HeaderAuth = () => {
	const dispatch = useDispatch()
	const logOut = async () => {
		await dispatch(logoutUser(
			localStorage.removeItem('token')
		))
	}
	const user = useSelector((state) => state.profileUser.data);
	useEffect(() => {
		dispatch(GetProfile());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		
		<nav className="navbar navbar-expand-lg fixed-top" style={{ boxShadow: '5px 5px 5px black' }}>
			<Link to="/"><img className="logo" src={Logo}></img></Link>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto" >
					<li className="nav-item active">
						<Link to="/" style={{ textDecoration: 'none' }}>
							<a className="nav-link" href="#" style={{ textDecoration: 'none' }}>Home <span className="sr-only">(current)</span></a>
						</Link>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item active">
						<Link to="/browseFields" style={{ textDecoration: 'none' }}>
							<a className="nav-link" href="#">Browse <span className="sr-only">(current)</span></a>
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<div className="dropdown">
					<img src={user.profilePic === null ? Profile : `https://soka.kuyrek.com:3005/${user?.profilePic}`} className="img-button dropdown-toggle" color="link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
					<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<Link to="/bio" style={{ textDecoration: 'none' }}>
							<a className="dropdown-item" href="#">Profile</a>
						</Link>
						<a className="dropdown-item" href="#">Setting</a>
						<Link to='/' style={{ textDecoration: 'none' }}>
						   <a className="dropdown-item" href="#" onClick={logOut}>Log Out</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default HeaderAuth