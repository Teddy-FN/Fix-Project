import React from 'react'
import HeaderNonAuth from '../../component/header/headerNonAuth'
import HeaderAuth from '../../component/header/headerAuth'
import Jumbotron from '../../component/landingPage/jumbotron'
import Cards from '../../component/landingPage/card'


function LandingPage() {
    return (
        <div>
            {/* <HeaderNonAuth /> */}
            <HeaderAuth />
            <Jumbotron />
            <Cards />
        </div>
    )
}

export default LandingPage;