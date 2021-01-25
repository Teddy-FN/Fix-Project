import React from 'react';
// eslint-disable-next-line no-unused-vars
import Feature from './Search';
import CardDetails from './cardsDetails';

function BrowseFields(props) {
    return (
        <div style={{ margin: '30px 0px' }}>
            {/* <Feature /> */}
           
            <CardDetails />
        </div>
    )
}

export default BrowseFields;