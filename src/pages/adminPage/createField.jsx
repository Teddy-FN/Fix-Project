import React from 'react'
import './style.css'
import {
    Container,
    Row,
    Col,
    Carousel,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFutbol } from '@fortawesome/free-solid-svg-icons';

const CreateField = () => {
    return (
        <div>
            <Container>
                <h1>Create New Field <FontAwesomeIcon icon={faFutbol} /></h1>
                <Row className='detail-top adminPage'>
                    <>
                        <div className='col-12 col-sm-4 col-md-8 field-img'>
                            <div>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 field-img-big"
                                            src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
                                            alt="Third slide"
                                        />
                                        {/* <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" />
                                            <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
                                        </div> */}
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 field-img-big"
                                            src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 field-img-big"
                                            src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 field-img-big"
                                            src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="position-relative overflow-hidden">
                                <img
                                    src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
                                    alt="field small"
                                    md={6}
                                    xs={12}
                                    className="col-3 img-sm"
                                />
                                <img
                                    src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
                                    alt="field small"
                                    md={6}
                                    xs={12}
                                    className="col-3 img-sm"
                                />
                                <img
                                    src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
                                    alt="field small"
                                    md={6}
                                    xs={12}
                                    className="col-3 img-sm"
                                />
                                <img
                                    src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
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
                            <label className="label nameField">Name Field</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div class="form-group">
                                <label className="label location"><i className='marker'><FontAwesomeIcon icon={faMapMarkerAlt} /></i>Location</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className='action-book'>
                            <h3 className='price-field'>
                                Enter Price
                            </h3>
                        </div>
                        <button type="button" class="btn btn-danger btn-lg">Cancel</button>
                        <button type="button" class="btn btn-warning btn-lg">Create Field</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CreateField;