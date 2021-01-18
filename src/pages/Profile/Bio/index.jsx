import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import './style.css'
import User from '../../../assets/img/user.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { useSelector, useDispatch } from "react-redux";

function Bio() {

    const token = localStorage.getItem('token')
    console.log(token)
    const id = localStorage.getItem('id')
    console.log('ID', id)

    // Get data user    
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null)

    const userAuth = () => {
        // axios.defaults.headers.common = { 'Authorization': 'Bearer' + token }
        axios.get(`https://soka.kuyrek.com:3005/user/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            console.log("Response", res)
            setUser(res.data)
        })
    }

    useEffect(() => {
        userAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className="subMenu">
                <Container>
                    <aside className="leftSide">
                        <div>
                            {/* {
                                user.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="profile">
                                                <img src={item.image} alt="" className="photo" />
                                            </div>
                                            <h4>{item.fullname}</h4>
                                            <div className="desc">
                                                <h4>Description</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            } */}
                            <div className="profile">
                                <img src={User} alt="" className="photo" />
                            </div>
                            <h4>Ronaldo Wati</h4>
                            <div className="desc">
                                <h4>Description</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis pharetra tortor neque eu ut. Augue facilisis pretium placerat ultricies volutpat ipsum sed. Natoque ullamcorper turpis elit integer at nisl. Id tellus amet varius malesuada. Vel dignissim interdum ut facilisi luctus porttitor ut. Nunc adipiscing tristique.</p>
                            </div>
                            <div className="button">
                                <button className="btn editBio">Edit Bio</button>
                            </div>
                        </div>
                    </aside>
                    <aside className="rightSide">
                        <div className="borderHistory">
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
                                        </div>
                                    </div>
                                </div>
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
                            </div>
                        </div>
                    </aside>
                </Container>
            </div>
        </div >
    )
}


export default Bio;