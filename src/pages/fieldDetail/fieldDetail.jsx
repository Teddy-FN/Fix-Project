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
import Loading from '../loading/loading';
import ModalBooking from './modalBooking';
import swal from 'sweetalert';

const FieldDetail = (props) => {

    const params = useParams();
    const [fields, setFields] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [noFeedbacks, setNoFeedbacks] = useState(false);
    const [ratingAvg, setRatingAvg] = useState([])
    const [loading, setLoading] = useState(false);
    const url = `https://soka.kuyrek.com:3001/field/${params.id}`;
    const urlFeedBacks = `https://soka.kuyrek.com:3002/feedback/${params.id}`;
    const token = localStorage.getItem('token');
    const [loadMore, setLoadMore] = useState(3);

    const handleLoadMore = () => {
        let load = loadMore + 1;
        setLoadMore(load)
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const getFeedBacks = () => {
        axios
            .get(urlFeedBacks, config)
            .then((res) => {
                setFeedbacks(res.data.data);
                setRatingAvg(res.data)
            })
            .catch((err) => {
                setNoFeedbacks(true);
            })
    }

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setFields(res.data.data);
                setLoading(true);
            })
            .catch((err) => {
                swal({
                    icon: "warning",
                    title: "Failed to get data",
                    text: "Please wait",
                    type: "warning",
                    buttons: false,
                    timer: 3000,
                });
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps

        // Animation 
        // eslint-disable-next-line no-undef
        // AOS.init({
        //     duration: 4000
        // });
        getFeedBacks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // let price = fields.price.$numberDecimal
    return (
        <>
            <Container>
                <Row className='detail-top'>
                    <div className='col-12 col-sm-4 col-md-8 field-img'>
                        {fields && loading ? (
                            <>
                                <Carousel>
                                    {fields.image.map((image, idx) => (
                                        <Carousel.Item key={idx}>
                                            <img
                                                className="d-block w-100 field-img-big"
                                                src={`https://soka.kuyrek.com:3001/${image}`}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <div>
                                    <div className="position-relative overflow-hidden">
                                        {fields.image.map((image, idx) => (
                                            <img
                                                key={idx}
                                                src={`https://soka.kuyrek.com:3001/${image}`}
                                                alt="field small"
                                                md={6}
                                                xs={12}
                                                className="col-3 img-sm"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (<Loading />)}
                    </div>
                    <Col className='detail-text'>
                        <div className='desc-field sm-3'>
                            <h2 className='field-name'>{fields.fieldName}</h2>
                            <p className='field-loc'>
                                <i className='marker'><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
                                {fields.location}
                            </p>
                            <h1 className='description-title'>Description</h1>
                            <p className='description-p'>{fields.description}</p>
                        </div>

                        <div className='action-book'>
                            <h3 className='price-field'>
                                Rp. {fields?.price?.$numberDecimal}.000 / Hour
                    </h3>
                            {/* <Link to='/player-list'>
                            <Button className='col-12 mb-3 btn-player'>
                                See Player List
                        </Button>
                    </Link> */}
                            <ModalBooking
                                isLogin={props.isLogin}
                                id={params.id}
                                price={fields?.price?.$numberDecimal}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm='6' className='review-title-big mt-3 mb-3'>
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
                    <Col sm='2' className='num-rating mt-3 mb-3'>
                        <span>
                            <h3 className='ml-auto mr-2' style={{ color: '#e5e5e5' }}>

                                {ratingAvg.ratingAvg === undefined ? 0 : Math.ceil(ratingAvg.ratingAvg)} /{' '}
                                <span style={{ color: '#e5e5e5' }}>5</span>
                            </h3>
                        </span>
                    </Col>
                    <Col sm='4'></Col>
                </Row>

                <Row className='review-user'>
                    <Col sm='8' className='comment'>
                        {noFeedbacks === true ? (
                            <p
                                style={{
                                    textAlign: 'center',
                                    fontSize: '30px',
                                    color: '#28df99',
                                    fontWeight: 'lighter',
                                    paddingTop: '50px'
                                }}
                            >No Feedbacks Yet</p>
                        ) : (
                                feedbacks.slice(0, loadMore).reverse().map((feedback, idx) => (
                                    <Card className='col-sm-12 mb-3 card-review'>
                                        <CardBody>
                                            <h4 className='review-title'>
                                                <b>{feedback.username}</b>
                                            </h4>
                                            <div className='rating'>
                                                <Rating
                                                    name='half-rating-read'
                                                    defaultValue={feedback.rating}
                                                    precision={0.2}
                                                    max={5}
                                                    readOnly
                                                />
                                            </div>
                                            <p className='review-p'>{feedback.review}</p>
                                        </CardBody>
                                    </Card>
                                )))}
                        {feedbacks?.length > 3 ? (
                            <div className="button-load-more" style={{ textDecoration: 'none', backgroundColor: 'none' }}>
                                <Button onClick={handleLoadMore} color="link"  >Load More</Button>
                            </div>
                        ) : (<p></p>)}
                    </Col>
                    <Col sm='4'>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default FieldDetail;
