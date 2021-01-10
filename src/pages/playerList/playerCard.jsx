import React from 'react';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import './playerCard.css';

const PlayerCard = (props) => {
    return (
        <>
        <Card className='player-card' style={{backgroundColor: '#545454'}}>
            <CardBody>
                <Row>
                    <Col sm='10' className='player-name'>
                        <p>{props.name}</p>
                    </Col>
                    <Col sm='2' className='code-pos'>
                        <p>{props.pos}</p>
                    </Col>
                </Row>
                <Row>
                    <Button className='col-11 mb-3 btn-profil'>
                        See Profile
                    </Button>
                </Row>
            </CardBody>
        </Card>
        </>
    )
}

export default PlayerCard;