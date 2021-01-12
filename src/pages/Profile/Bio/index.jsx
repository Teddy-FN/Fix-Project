import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import './style.css'
import User from '../../../assets/img/user.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Bio() {
    const [infoUser, setState] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1')
            .then(result => result.json())
            .then(listDataUser => listDataUser.results.map(dataUser => ({
                firstName: `${dataUser.name.first}`,
                lastName: `${dataUser.name.last}`,
                thumbnail: `${dataUser.picture.large}`
            }
            )))
            .then(infoUser => setState({
                infoUser
            }))
    })

    console.log('InfoUser', infoUser)
    return (
        <div>
            <div className="subMenu">
                <Container>
                    <aside className="leftSide">
                        <div>
                            <div className="profile">
                                <img src={User} alt="" className="photo" />
                            </div>
                            <h4>RonaldoWATI</h4>
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
                                            <h5 className="status"></h5>
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