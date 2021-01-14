import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.scss'
// import Img from '../../../assets/img/fields.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
// import fields from '../../dataDummy/dataDummy'
import axios from 'axios';


function CardFields() {

    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(false);


    const url = 'http://54.251.238.126:3001/field/'

    useEffect(() => {
        axios
          .get(url)
          .then((res) => {
            setFields(res.data.data);
            // console.log(fields);
            setLoading(true);
          })
          .catch((err) => {
            console.log(err);
            
          });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
console.log(fields)
    return (
        <div>
            <Container>
                <div className="main">
                    <div className="content">
                    {fields && loading ? (
                        fields.map((field, idx) =>(
                        <div key={idx} class="card" style={{ width: '16rem' }}>
                            <img src='https://i0.wp.com/www.jurnalponsel.com/wp-content/uploads/2019/05/Tanda-Lain-pada-Lapangan-Futsal.jpg?resize=600%2C400&ssl=1' className="card-img-top card-image" alt={field.fieldName} />
                            <div className="card-body">
                                <h6 className="card-title">{field.fieldName}</h6>
                                <small className="price">Rp. {field.price.$numberDecimal}.000</small>
                                <p className="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />{field.location}</p>
                                <Link to='/field-details'>
                                    <button className="btn btn-secondary view">View</button>
                                </Link>
                                <button className="btn book">Book</button>
                            </div>
                        </div>))
                        ) : (
                            <p>Loading...</p>
                          )}
                        {/* <div class="card" style={{ width: '16rem' }}>
                            <img src={Img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fields A</h5>
                                <small class="price">Rp. 150.000</small>
                                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                                <button className="btn btn-secondary view">View</button>
                                <button className="btn book">Book</button>
                            </div>
                        </div>
                        <div class="card" style={{ width: '16rem' }}>
                            <img src={Img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fields A</h5>
                                <small class="price">Rp. 150.000</small>
                                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                                <button className="btn btn-secondary view">View</button>
                                <button className="btn book">Book</button>
                            </div>
                        </div>
                        <div class="card" style={{ width: '16rem' }}>
                            <img src={Img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fields A</h5>
                                <small class="price">Rp. 150.000</small>
                                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                                <button className="btn btn-secondary view">View</button>
                                <button className="btn book">Book</button>
                            </div>
                        </div>
                        <div class="card" style={{ width: '16rem' }}>
                            <img src={Img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fields A</h5>
                                <small class="price">Rp. 150.000</small>
                                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                                <button className="btn btn-secondary view">View</button>
                                <button className="btn book">Book</button>
                            </div>
                        </div>
                        <div class="card" style={{ width: '16rem' }}>
                            <img src={Img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fields A</h5>
                                <small class="price">Rp. 150.000</small>
                                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                                <button className="btn btn-secondary view">View</button>
                                <button className="btn book">Book</button>
                            </div>
                        </div>
                        <div class="card" style={{ width: '16rem' }}>
                            <img src={Img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fields A</h5>
                                <small class="price">Rp. 150.000</small>
                                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                                <button className="btn btn-secondary view">View</button>
                                <button className="btn book">Book</button>
                            </div>
                        </div>
                        <div class="card" style={{ width: '16rem' }}>
                            <img src={Img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fields A</h5>
                                <small class="price">Rp. 150.000</small>
                                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                                <button className="btn btn-secondary view">View</button>
                                <button className="btn book">Book</button>
                            </div>
                        </div>
                        <div class="card" style={{ width: '16rem' }}>
                            <img src={Img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fields A</h5>
                                <small class="price">Rp. 150.000</small>
                                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                                <button className="btn btn-secondary view">View</button>
                                <button className="btn book">Book</button>
                            </div>
                        </div>
                        <div class="card" style={{ width: '16rem' }}>
                            <img src={Img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fields A</h5>
                                <small class="price">Rp. 150.000</small>
                                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                                <button className="btn btn-secondary view">View</button>
                                <button className="btn book">Book</button>
                            </div>
                        </div>
                        <div class="card" style={{ width: '16rem' }}>
                            <img src={Img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fields A</h5>
                                <small class="price">Rp. 150.000</small>
                                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                                <button className="btn btn-secondary view">View</button>
                                <button className="btn book">Book</button>
                            </div>
                        </div>
                        <div class="card" style={{ width: '16rem' }}>
                            <img src={Img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fields A</h5>
                                <small class="price">Rp. 150.000</small>
                                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                                <button className="btn btn-secondary view">View</button>
                                <button className="btn book">Book</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </Container>
        </div >
    )
}


export default CardFields;