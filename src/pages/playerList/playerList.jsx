import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './playerList.css';
import PlayerCard from './playerCard';

const PlayerList = () => {
    return (
        <>
        <Container>
        <Row>
            <Col sm='6' className='team-name'>
                Team A
            </Col>
            <Col sm='6' className='team-name'>
                Team B
            </Col>
        </Row>
        <Row>
            <Col  style={{marginRight: '10px'}} className='border'>
                <PlayerCard name='Jonathan Joestar' pos='GK'/>
                <PlayerCard name='Joseph Joestar' pos='MB'/>
                <PlayerCard name='Jotaro Kujo' pos='FW'/>
                <PlayerCard name='Higashikata Josuke' pos='FW'/>
                <PlayerCard name='Giorno Giovanna' pos='FW'/>
            </Col>
            <Col className='border'>
                <PlayerCard name='Dio Brando' pos='GK'/>
                <PlayerCard name='Kars' pos='MB'/>
                <PlayerCard name='Yoshikage Kira' pos='FW'/>
                <PlayerCard name='Diavolo' pos='FW'/>
                <PlayerCard name='Pucci' pos='FW'/>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default PlayerList;