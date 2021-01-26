/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardText, CardBody, CardSubtitle, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './card.css';
import axios from 'axios';

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
      }, [])
console.log(fields)
// const img = fields.image[0].slice(7)
  return (
    <div
      style={{
        backgroundColor: '#313131', margin: 'none'
      }}>
      <div className="landingPageCards">
        <h3 className="feature-title">Feature Field</h3>
        <Link to='/browseFields'>
          <button className="btn goto" style={{color: 'white'}}>Browse Field <FontAwesomeIcon icon={faArrowRight} class="map right" /></button>
        </Link>
        <br />
        <br />
        <div className="main-home">
          <div className="content">
            {fields.slice(0, 4).map((field) => (<div class="card home" style={{ width: '18rem' }}>
              <img src={`https://soka.kuyrek.com:3001/${field.image[0]}`} className="card-img-top image" alt={field.fieldName} />
              <div class="card-body">
                <h5 class="card-title">{field.fieldName.slice(0, 15)}</h5>
                <small class="price">Rp. {field.price.$numberDecimal}.000</small>
                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />{field.location}</p>
                {/* <Link to={`field-details/${field.id}`}><button className="btn btn-secondary view">View</button></Link>
                <button className="btn book">Book</button> */}
              </div>
            </div>
            ))}
          </div>
      </div>
    </div>
    </div>
  )
}


export default Cards