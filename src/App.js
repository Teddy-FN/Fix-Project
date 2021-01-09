import React from 'react'
import HeaderNonAuth from './component/header/headerNonAuth'
import HeaderAuth from './component/header/headerAuth'
import Jumbotron from './component/landingPage/jumbotron'
import Cards from './component/landingPage/card'

function App() {
  return (
    <>
      <React.Fragment>
        <HeaderNonAuth />
        {/* <HeaderAuth /> */}
        <Jumbotron />
        <Cards />
      </React.Fragment>
    </>
  )
}

export default App;

