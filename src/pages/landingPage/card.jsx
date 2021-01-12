/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardText, CardBody, CardSubtitle, Row } from 'reactstrap';
import Pict from '../../assets/img/ball.jpg'
import Img from '../../assets/img/ball.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './card.css'
import fields from '../dataDummy/dataDummy'

const Cards = () => {
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
        <div className="main home">
          <div className="content">
            {fields.slice(0, 4).map((field) => (<div class="card home" style={{ width: '18rem' }}>
              <img src={field.src} className="card-img-top image" alt={field.fieldName} />
              <div class="card-body">
                <h5 class="card-title">{field.fieldName}</h5>
                <small class="price">Rp. {field.price}</small>
                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                <button className="btn btn-secondary view">View</button>
                <button className="btn book">Book</button>
              </div>
            </div>
            ))}
            {/* <div class="card home" style={{ width: '18rem' }}>
              <img src={Img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Fields A</h5>
                <small class="price">Rp. 150.000</small>
                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                <button className="btn btn-secondary view">View</button>
                <button className="btn book">Book</button>
              </div>
            </div>
            <div class="card home" style={{ width: '18rem' }}>
              <img src={Img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Fields A</h5>
                <small class="price">Rp. 150.000</small>
                <p class="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} class="map" />2972 Westheimer Rd. Santa Monica,United State Belakang alun-alun Kota samping balai kota.</p>
                <button className="btn btn-secondary view">View</button>
                <button className="btn book">Book</button>
              </div>
            </div>
            <div class="card home" style={{ width: '18rem' }}>
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
        {/* <Row>
        <Card className="body-card" style={{ backgroundColor: '#545454' }}>
          <img class="ilustration" src={Pict} />
          <CardBody>
            <Row>
              <CardSubtitle className="field-name">Nama</CardSubtitle>
              <CardSubtitle className="field-price">Harga</CardSubtitle>
            </Row>
            <br />
            <CardText className="address">Alamat lapangan nanti disini</CardText>
            <button className="view-button">View</button>
            <button className="book-button">Book</button>
          </CardBody>
        </Card>
        <Card className="body-card" style={{ backgroundColor: '#545454' }}>
          <img class="ilustration" src={Pict} />
          <CardBody>
            <Row>
              <CardSubtitle className="field-name">Nama</CardSubtitle>
              <CardSubtitle className="field-price">Harga</CardSubtitle>
            </Row>
            <br />
            <CardText className="address">Alamat lapangan nanti disini</CardText>
            <button className="view-button">View</button>
            <button className="book-button">Book</button>
          </CardBody>
        </Card>
        <Card className="body-card" style={{ backgroundColor: '#545454' }}>
          <img class="ilustration" src={Pict} />
          <CardBody>
            <Row>
              <CardSubtitle className="field-name">Nama</CardSubtitle>
              <CardSubtitle className="field-price">Harga</CardSubtitle>
            </Row>
            <br />
            <CardText className="address">Alamat lapangan nanti disini</CardText>
            <button className="view-button">View</button>
            <button className="book-button">Book</button>
          </CardBody>
        </Card>
        <Card className="body-card" style={{ backgroundColor: '#545454' }}>
          <img class="ilustration" src={Pict} />
          <CardBody>
            <Row>
              <CardSubtitle className="field-name">Nama</CardSubtitle>
              <CardSubtitle className="field-price">Harga</CardSubtitle>
            </Row>
            <br />
            <CardText className="address">Alamat lapangan nanti disini</CardText>
            <button className="view-button">View</button>
            <button className="book-button">Book</button>
          </CardBody>
        </Card>
      </Row> */}
      </div>
    </div>
  )
}


export default Cards