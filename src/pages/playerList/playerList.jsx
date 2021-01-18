import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './playerList.css';
import PlayerCard from './playerCard';

const PlayerList = (props) => {
    return (
        <>
        {props.isLogin !== true ? (
          <div>
            
             <Row>
                
              </Row>
              <Col>
                <h3 style={{ textAlign: "center" }}>
                  Hello guest, <br />
                  please log in first <br />
                  as user!!
                </h3>
                <h4 style={{ textAlign: "center" }}>
                  if you see this page
                </h4>
              </Col>
          </div>
        ) : (

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
            {/* <p className='team-name'>Team A</p> */}
            <Col  style={{marginRight: '10px'}} className='border'>
                <PlayerCard name='Jonathan Joestar' pos='GK'/>
                <PlayerCard name='Joseph Joestar' pos='MB'/>
                <PlayerCard name='Jotaro Kujo' pos='FW'/>
                <PlayerCard name='Higashikata Josuke' pos='FW'/>
                <PlayerCard name='Giorno Giovanna' pos='FW'/>
            </Col>
            {/* <p className='team-name'>Team A</p> */}
            <Col className='border'>
                <PlayerCard name='Dio Brando' pos='GK'/>
                <PlayerCard name='Kars' pos='MB'/>
                <PlayerCard name='Yoshikage Kira' pos='FW'/>
                <PlayerCard name='Diavolo' pos='FW'/>
                <PlayerCard name='Pucci' pos='FW'/>
            </Col>
        </Row>
        </Container>)}
        </>
    )
}

export default PlayerList;