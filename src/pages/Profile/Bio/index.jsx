import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import './style.css'
import User from '../../../assets/img/user.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { useSelector, useDispatch } from "react-redux";
import StepThree from '../../booking/stepThree/'

function Bio() {

    const token = localStorage.getItem('token')
    console.log(token)

    // Get data user    
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const url = `https://soka.kuyrek.com:3005/user/profile`;
    useEffect(() => {
        axios.get(url
            , {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            // console.log("Response", res)
            setLoading(true);
            setUser(res.data.data);
        })
            .catch(error => {
                console.log(error)
            })
    }, [user, url])
    console.log(user)
    return (
        <div>
            <div className="subMenu">
                <Container>
                    <aside className="leftSide">
                        <div>
                            <div className="profile">
                                <img src={`https://soka.kuyrek.com:3005/${user.image}`} alt="" className="photo" />
                            </div>
                            <h4>{user.fullname}</h4>
                            <div className="desc">
                                <h4>Description</h4>
                                <p>{user.description}</p>
                            </div>
                            {/* {user && loading ? (
                                user.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="profile">
                                            <img src={item.image} alt="" className="photo" />
                                        </div>
                                        <h4>{item.fullname}</h4>
                                        <div className="desc">
                                            <h4>Description</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                    <p>Loading</p>
                                )
                            } */}
                            <div className="button">
                                <button className="btn editBio">Edit Bio</button>
                            </div>
                        </div>
                    </aside>
                    <aside className="rightSide">
                        <div className="borderHistory">
                            <StepThree />
                        </div>
                    </aside >
                </Container >
            </div >
        </div >
    )
}

// {/* <div className="contentBorder">
//     <h5 className="headerBox">Book History</h5>
//     <div class="card text-center">
//         <div class="card-body">
//             <div className="contentCard">
//                 <h5 className="headerCard">Field Name</h5>
//                 {/* <h5 className="status"></h5> */}
//                 <small className="date">2021-01-01</small>
//                 <Link to='player-list'>
//                     <button className="btn player">Player List</button>
//                 </Link>
//                 <p className="footerCard">Coming Up Match</p>
//             </div >
//         </div >
//     </div >
//     <div class="card text-center">
//         <div class="card-body">
//             <div className="contentCard">
//                 <h5 className="headerCard">Field Name 2</h5>
//                 <h5 className="status">done</h5>
//                 <small className="date">2021-01-01</small>
//                 <Link to='player-list'>
//                     <button className="btn player">Player List</button>
//                 </Link>
//                 <p className="footerCard">Give Feedback</p>
//             </div>
//         </div>
//     </div>
//     <div class="card text-center">
//         <div class="card-body">
//             <div className="contentCard">
//                 <h5 className="headerCard">Field Name 3</h5>
//                 <h5 className="status">done</h5>
//                 <small className="date">2021-01-01</small>
//                 <Link to='player-list'>
//                     <button className="btn player">Player List</button>
//                 </Link>
//                 <p className="footerCard">Give Feedback</p>
//             </div>
//         </div>
//     </div>
// </div > * /}
export default Bio;