/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react'
import HeaderNonAuth from './pages/header/headerNonAuth'
import HeaderAuth from './pages/header/headerAuth'
import LandingPage from '../src/pages/landingPage/landingPage'
import FieldDetails from './pages/fieldDetail/fieldDetail'
import BrowseFields from './pages/FieldList/BrowseFields'
import PlayerList from './pages/playerList/playerList'
import Bio from './pages/Profile/Bio'
import { Switch, Route } from 'react-router-dom'
import { handler } from './provider/index'

function App() {
  const [tokens, setTokens] = useState({
    tokenUser: ''
  });
  const { logged, setLogged } = useContext(handler)
  console.log(logged, 'ini Logic');
  useEffect(() => {
    // tokenUser();
    if ("token" in localStorage) {
      setTokens(true)
    }
  }, [logged])

  const tokenUser = () => {
    const token = 'tokenUser'
    console.log(token);
    tokens.tokenUser = token;
    console.log(tokens.tokenUser);
  }

  return (
    <>
      {
        logged || 'token' in localStorage ? <HeaderAuth /> : <HeaderNonAuth />
      }
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/browseFields' exact>
          <BrowseFields />
        </Route>
        <Route path='/field-details/:id' exact>
          <FieldDetails />
        </Route>
        <Route path='/player-list' exact>
          <PlayerList />
        </Route>
        <Route path='/bio' exact>
          <Bio />
        </Route>
      </Switch>
    </>
  )
}

export default App;

