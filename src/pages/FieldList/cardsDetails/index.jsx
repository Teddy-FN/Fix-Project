import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


function CardFields() {

    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(false);


    const url = 'https://soka.kuyrek.com:3001/field'

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
                            <img src={`https://soka.kuyrek.com:3001/${field.image}`} className="card-img-top card-image" alt={field.fieldName} />
                            <div className="card-body">
                                <h6 className="card-title">{field.fieldName}</h6>
                                <small className="price">Rp. {field.price.$numberDecimal}.000</small>
                                <p className="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />{field.location}</p>
                                <Link to={`/field-details/${field._id}`}>
                                    <button className="btn btn-secondary view">View</button>
                                </Link>
                                <button className="btn book">Book</button>
                            </div>
                        </div>))
                        ) : (
                            <p>Loading...</p>
                          )}
                    </div>
                </div>
            </Container>
        </div >
    )
}


export default CardFields;