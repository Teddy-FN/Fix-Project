import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


function CardFields() {

    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('')


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
    return (
        <div>
            <Container>
                <div className="searchButton">
                    <form class="form-inline my-0 my-lg-0">
                        <input class="form-control mr-sm-1 searching" type="search" placeholder="Search" aria-label="Search....." onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                        <button type="button" class="btn btn-success buttonSearch">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>
                <div className="sorter">
                    <div class="dropdown filter">
                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <small className="nameFitur">Filter</small>
                            <small className="dropdown-toggle"></small>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p>Name</p>
                        </div>
                    </div>
                    <div class="dropdown sort">
                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <small className="nameFitur">Sort</small>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="content">
                        {fields && loading ? (
                            fields.filter((val) => {
                                if (setSearch === '') {
                                    return val
                                } else if (val.fieldName.toLowerCase().includes(search.toLowerCase())) {
                                    return val
                                } else if (val.location.toLowerCase().includes(search.toLowerCase())) {
                                    return val
                                }
                            }).map((field, idx) => (
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