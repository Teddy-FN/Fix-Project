import React from 'react';
import Feature from './Search';
import CardDetails from './cardsDetails'

function BrowseFields() {
    return (
        <div style={{ margin: '30px 0px' }}>
            <Feature />
            <CardDetails />
        </div>
    )
}

export default BrowseFields;