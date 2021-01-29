import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from './pagination';
import Loading from '../../loading/loading';
<<<<<<< HEAD
import ButtonAdmin from '../addFields/buttonAdmin';
=======
>>>>>>> 6afbef21c27a2e26489d9ada48fd93adb3db5473


function CardFields() {

    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(8);

    const url = 'https://soka.kuyrek.com:3001/field'

    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then((res) => {
                setFields(res.data.data);
                // console.log(fields);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);

            });
    }, [])

    const sortByNameAsc = (e) => {
        e.preventDefault();
        axios
            .get(`https://soka.kuyrek.com:3001/field/?sortByField=asc`)
            .then((res) => {
                setFields(res.data.data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const sortByNameDesc = (e) => {
        e.preventDefault();
        axios
            .get(`https://soka.kuyrek.com:3001/field/?sortByField=desc`)
            .then((res) => {
                setFields(res.data.data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const sortByPriceAsc = (e) => {
        e.preventDefault();
        axios
            .get(`https://soka.kuyrek.com:3001/field/?sortByPrice=asc`)
            .then((res) => {
                setFields(res.data.data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const sortByPriceDesc = (e) => {
        e.preventDefault();
        axios
            .get(`https://soka.kuyrek.com:3001/field/?sortByPrice=desc`)
            .then((res) => {
                setFields(res.data.data);
                console.log('data sort', res.data.data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Get current posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = fields.slice(indexOfFirstPost, indexOfLastPost);

    // ubah page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: '#545454' }}>
                            <small className="nameFitur">Filter</small>
                            <small className="dropdown-toggle"></small>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p className='dropdown-item' onClick={sortByNameAsc}>Filter By Name (A-Z)</p>
                            <p className='dropdown-item' onClick={sortByNameDesc}>Filter By Name (Z-A)</p>
                        </div>
                    </div>
                    <div class="dropdown sort">
                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: '#545454' }}>
                            <small className="nameFitur">Sort</small>
                            <small className="dropdown-toggle"></small>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p className='dropdown-item' onClick={sortByPriceAsc}>Sort By Price (Low-High)</p>
                            <p className='dropdown-item' onClick={sortByPriceDesc}>Sort By Price (High-Low)</p>
                        </div>
                    </div>
                </div>
                <Link to='/createField'>
                    <button className="btn btn-warning createField">Create Field</button>
                </Link>
                <div className="main">
                    <div className="content">
                        {fields && loading ? (
                            // eslint-disable-next-line array-callback-return
                            currentPosts.filter((val) => {
                                if (setSearch === '') {
                                    return val
                                } else if (val.fieldName.toLowerCase().includes(search.toLowerCase())) {
                                    return val
                                } else if (val.location.toLowerCase().includes(search.toLowerCase())) {
                                    return val
                                }
                            }).map((field, idx) => (
                                <div key={idx} class="card" style={{ width: '16rem' }}>
                                    <Link to={`/field-details/${field._id}`} style={{ textDecoration: 'none', color: 'white' }} className='card-fields'>
                                        <img src={`https://soka.kuyrek.com:3001/${field.image[0]}`} className="card-img-top card-image" alt={field.fieldName} />
                                        <div className="card-body">
                                            <h6 className="card-title">{field.fieldName.slice(0, 15)}</h6>
                                            <small className="price">Rp. {field.price.$numberDecimal}.000</small>
                                            <p className="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />{field.location}</p>
                                            {/* <button className="btn btn-secondary view">View</button>
                                        <button className="btn book">Book</button> */}
                                        </div>
                                    </Link>
                                </div>))
                        ) : (
                                <Loading />
                            )}
                    </div>
                </div>
            </Container>
            <div className='page'>
                <Pagination
                    postsPerPage={postPerPage}
                    totalPosts={fields.length}
                    paginate={paginate}
                />
            </div>
        </div >
    )
}


export default CardFields;