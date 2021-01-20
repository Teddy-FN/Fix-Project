import React from 'react';
// eslint-disable-next-line no-unused-vars
import Feature from './Search';
import CardDetails from './cardsDetails';
import {Col} from 'reactstrap';

function BrowseFields(props) {
    return (
        <div style={{ margin: '30px 0px' }}>
            {/* <Feature /> */}
            {props.isLogin !== true ? (
          <div>
              <Col>
                <h3 style={{ textAlign: "center", marginTop: '150px' }}>
                  Hello guest, <br />
                  please log in first <br />
                  as user!!
                </h3>
              </Col>
          </div>
        ) : (
            <CardDetails />
        )}
        </div>
    )
}

export default BrowseFields;