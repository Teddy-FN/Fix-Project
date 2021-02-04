/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardText, CardBody, CardSubtitle, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './card.css';
import axios from 'axios';
import Loading from '../loading/loading';
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {

  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(false);


  // const url = 'http://54.251.238.126:3001/field/'
  const url = 'https://soka.kuyrek.com:3001/field/'


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

    // Animation
    AOS.init({ duration: 4000 });
  }, [])
  console.log(fields)
  // const img = fields.image[0].slice(7)
  return (
    <div
      style={{
        backgroundColor: '#313131', margin: 'none'
      }}>
      <div className="landingPageCards">
        <p className="feature-title">Feature Field</p>
        <Link to='/browseFields' style={{ textDecoration: 'none' }}>
          <a className="goto" style={{ color: 'white', textDecoration: 'none' }} href='?#'>Browse Field &#10140;</a>
        </Link>
        <br />
        <br />
        <div className="main-home">
          <div className="content" data-aos="fade-up">
            {fields && loading ? (fields.slice(6).map((field) => (<div className="card home" style={{ width: '18rem' }}>
              <Link to={`field-details/${field.id}`} style={{ textDecoration: 'none', color: 'white' }} >
                <div className='card-fields'>
                  <img src={`https://soka.kuyrek.com:3001/${field.image[0]}`} className="card-img-top image" alt={field.fieldName} />
                  <div className="card-body">
                    <h5 className="card-title">{field.fieldName.slice(0, 15)}</h5>
                    <small className="price">Rp. {field.price.$numberDecimal} K</small>
                    <p className="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} className="map" />{field.location}</p>
                    {/* <button className="btn btn-secondary view">View</button>
                <button className="btn book">Book</button> */}
                  </div>
                </div>
              </Link>
            </div>
            ))) : (<Loading />)}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Cards