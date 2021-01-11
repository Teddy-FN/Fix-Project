import React from 'react'
// import HeaderNonAuth from '../header/headerNonAuth'
// import HeaderAuth from '../header/headerAuth'
import Jumbotron from './jumbotron'
import Cards from './card'


function LandingPage() {
    return (
        <div>
            {/* <HeaderNonAuth /> */}
            {/* <HeaderAuth /> */}
            <Jumbotron />
            <Cards />
        </div>
    )
}

export default LandingPage;