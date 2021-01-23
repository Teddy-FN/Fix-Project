/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './fieldDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
    Container,
    Row,
    Col,
    Carousel,
    Button,
} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import { Rating } from '@material-ui/lab';
import axios from 'axios';



const FieldDetail = () => {

const params =useParams();
const [fields, setFields] = useState([]);
const [loading, setLoading] = useState(false);
// const [images, setImages] = useState([]);
// const url = `http://54.251.238.126:3001/field/${params.id}`
const url = `https://soka.kuyrek.com:3001/field/${params.id}`


useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setFields(res.data.data);
        setLoading(true);
        // setImages(res.data.data.image);
        console.log(fields);
        // console.log(images)
        // setLoading(true);
      })
      .catch((err) => {
        console.log(err);
        
      });
  }, )
    return (
        <>
        <Container>
            
            <Row className='detail-top'>
                <>
                <div className='col-12 col-sm-4 col-md-8 field-img'>
                    <div>
                {fields && loading ? (
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 field-img-big"
                                src={`http://54.251.238.126:3001/${fields?.image[0]}`}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 field-img-big"
                                src={`http://54.251.238.126:3001/${fields?.image[1]}`}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 field-img-big"
                                src={`http://54.251.238.126:3001/${fields?.image[2]}`}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 field-img-big"
                                src={`http://54.251.238.126:3001/${fields?.image[3]}`}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
    ):(<p>Loading...</p>)}
                    </div>
                    {fields && loading ? (
                    <div className="position-relative overflow-hidden">
                        <img
                            src={`http://54.251.238.126:3001/${fields?.image[0]}`}
                            alt="field small"
                            md={6}
                            xs={12}
                            className="col-3 img-sm"
                        />
                        <img
                            src={`http://54.251.238.126:3001/${fields?.image[1]}`}
                            alt="field small"
                            md={6}
                            xs={12}
                            className="col-3 img-sm"
                        />
                        <img
                            src={`http://54.251.238.126:3001/${fields?.image[2]}`}
                            alt="field small"
                            md={6}
                            xs={12}
                            className="col-3 img-sm"
                        />
                        <img
                            src={`http://54.251.238.126:3001/${fields?.image[3]}`}
                            alt="field small"
                            md={6}
                            xs={12}
                            className="col-3 img-sm"
                        />
                    </div>
                    ):(<p>Loading...</p>)}
                </div>
                </>
                <Col className='detail-text'>
                    <div className='desc-field sm-3'>
                        <h2 className='field-name'>{fields.fieldName}</h2>
                        <p className='field-loc'>
                        {/* <i class="fas fa-map-marker-alt"></i> */}
                        <i className='marker'><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
                        {fields.location} 
                        </p>
                        <h1 className='description-title'>Description</h1>
                        <p className='description-p'>{fields.description}</p>
                    </div>

                    <div className='action-book'>
                        <h3 className='price-field'>
                            Rp. {fields?.price?.$numberDecimal}.000
                        </h3>
                        <Link to='/player-list'>
                            <Button className='col-12 mb-3 btn-player'>
                                See Player List
                            </Button>
                        </Link>
                        <Link to='/compiler'>
                            <Button className='col-12 mb-3 btn-book'>
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm='4' className='review-title mt-3 mb-3'>
                    <h2>Feedback and Review</h2>
                </Col>
                {/* <span>
                        <Rating 
                            name='half-rating-read'
                            defaultValue='1'
                            precision={1}
                            max={1}
                            readOnly
                        />
                        </span> */}
                <Col sm='4' className='num-rating mt-3 mb-3'>
                        <span>
                        <h3 className='ml-auto mr-2' style={{ color: '#e5e5e5' }}>
                            4.7 /{' '}
                            <span style={{ color: '#e5e5e5' }}>5</span>
                        </h3>
                        </span>
                </Col>
                <Col sm='4'></Col>
            </Row>

            <Row className='review-user' >
                <Col sm='8' className='comment'>
                    <Card className='col-sm-12 mb-3 card-review'>
                        <CardBody>
                            <h4 className='review-title'>
                                <b>Speedwagon</b>
                            </h4>
                            <div className='rating'>
                                <Rating 
                                    name='half-rating-read'
                                    defaultValue={5}
                                    precision={0.2}
                                    max={5}
                                    readOnly
                                />
                            </div>
                            <p className='review-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui aspernatur maxime possimus cum fuga! Autem odio temporibus voluptatum deleniti distinctio illum excepturi, cumque laboriosam perspiciatis esse placeat a inventore consequuntur.</p>
                        </CardBody>
                    </Card>

                    <Card className='col-sm-12 mb-3 card-review'>
                        <CardBody>
                            <h4 className='review-title'>
                                <b>Dio Brando</b>
                            </h4>
                            <div className='rating'>
                                <Rating 
                                    name='half-rating-read'
                                    defaultValue={1}
                                    precision={0.2}
                                    max={5}
                                    readOnly
                                />
                            </div>
                            <p className='review-p'>This place stinks</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm='4'>

                </Col>
            </Row>
        </Container>
        </>
    );
}

export default FieldDetail;