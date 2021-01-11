import React from 'react';
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
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
//import { Rating } from '@material-ui/lab';

const FieldDetail = () => {

    return (
        <>
        <Container>
            <Row className='detail-top'>
                <>
                <div className='col-12 col-sm-4 col-md-8 field-img'>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 field-img-big"
                                src="https://www.jaringfutsalpengaman.com/wp-content/uploads/2018/07/24.jpg"
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 field-img-big"
                                src="https://3.bp.blogspot.com/--mdedSWIJ4E/WGsokgMh3QI/AAAAAAAAPEI/BqHVU0l49BQDp5LU5xFIYFOPZEprnqNHACLcB/s1600/Domo%2BPolideportivo%2Bde%2Bla%2BCDAG%2BGuatemala.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 field-img-big"
                                src="https://i0.wp.com/www.jurnalponsel.com/wp-content/uploads/2019/05/Tanda-Lain-pada-Lapangan-Futsal.jpg?resize=600%2C400&ssl=1"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 field-img-big"
                                src="https://rumus.web.id/wp-content/uploads/2018/09/Ukuran-Lapangan-Futsal-Mini-Sesuai-Standar-Internasional.png"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="position-relative overflow-hidden">
                        <img
                            src="https://www.jaringfutsalpengaman.com/wp-content/uploads/2018/07/24.jpg"
                            alt="field small"
                            md={6}
                            xs={12}
                            className="col-3 img-sm"
                        />
                        <img
                            src="https://3.bp.blogspot.com/--mdedSWIJ4E/WGsokgMh3QI/AAAAAAAAPEI/BqHVU0l49BQDp5LU5xFIYFOPZEprnqNHACLcB/s1600/Domo%2BPolideportivo%2Bde%2Bla%2BCDAG%2BGuatemala.jpg"
                            alt="field small"
                            md={6}
                            xs={12}
                            className="col-3 img-sm"
                        />
                        <img
                            src="https://i0.wp.com/www.jurnalponsel.com/wp-content/uploads/2019/05/Tanda-Lain-pada-Lapangan-Futsal.jpg?resize=600%2C400&ssl=1"
                            alt="field small"
                            md={6}
                            xs={12}
                            className="col-3 img-sm"
                        />
                        <img
                            src="https://rumus.web.id/wp-content/uploads/2018/09/Ukuran-Lapangan-Futsal-Mini-Sesuai-Standar-Internasional.png"
                            alt="field small"
                            md={6}
                            xs={12}
                            className="col-3 img-sm"
                        />
                    </div>
                </div>
                </>
                <Col className='detail-text'>
                    <div className='desc-field sm-3'>
                        <h2 className='field-name'>Field A</h2>
                        <p className='field-loc'>
                        {/* <i class="fas fa-map-marker-alt"></i> */}
                        <i className='marker'><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
                        2972 Westheimer Rd. Santa Ana... 
                        </p>
                        <h1 className='description-title'>Description</h1>
                        <p className='description-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci velit recusandae iure, voluptatem a asperiores impedit aperiam totam unde repellat nihil ipsam! Ipsa voluptates magni quas nihil expedita, iusto quo.</p>
                    </div>

                    <div className='action-book'>
                        <h3 className='price-field'>
                            Rp 120.000
                        </h3>
                        <Link to='/player-list'>
                            <Button className='col-12 mb-3 btn-player'>
                                See Player List
                            </Button>
                        </Link>
                        <Button className='col-12 mb-3 btn-book'>
                            Book Now
                        </Button>
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
                                {/* <Rating 
                                    name='half-rating-read'
                                    defaultValue={5}
                                    precision={0.2}
                                    max={5}
                                    readOnly
                                /> */}
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
                                {/* <Rating 
                                    name='half-rating-read'
                                    defaultValue={1}
                                    precision={0.2}
                                    max={5}
                                    readOnly
                                /> */}
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