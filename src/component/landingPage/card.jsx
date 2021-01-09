import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardText, CardBody, CardSubtitle, Row } from 'reactstrap';
import Pict from '../../assets/ball.jpg'
import '../landingPage/card.css'

const Cards = () => {
  return (
    <div
    style={{
      backgroundColor: '#313131', margin: 'none'
    }}>
      <h3 className="feature-title">Feature Field</h3>
      <a className="go-to">Browse Field</a>
      <br/>
      <br/>
      <Row>
        <Card className="body-card">
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
        <Card className="body-card">
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
        <Card className="body-card">
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
        <Card className="body-card">
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
      </Row>
    </div>
  )
}

export default Cards