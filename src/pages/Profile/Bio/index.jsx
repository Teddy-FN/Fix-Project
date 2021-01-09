import React from 'react';
import { Container } from 'reactstrap';
import './style.css'
import User from '../../../assets/img/user.png'

function Bio() {
    return (
        <div>
            <Container>
                <aside className="leftSide">
                    <div>
                        <div className="profile">
                            <img src={User} alt="" className="photo" />
                        </div>
                        <h3 className="nameUser">Giovani Ronaldo</h3>
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
                                        <button className="btn player">Player List</button>
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
                                        <button className="btn player">Player List</button>
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
                                        <button className="btn player">Player List</button>
                                        <p className="footerCard">Give Feedback</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </Container>
        </div>
    )
}


export default Bio;