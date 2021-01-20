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
  const [isLogin, setIsLogin] = useState(false);
  const { logged, setLogged } = useContext(handler)
  console.log(logged, 'ini Logic');
  useEffect(() => {
    // tokenUser();
    if ("token" in localStorage) {
      setTokens(true)
      setIsLogin(true)
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
          <BrowseFields isLogin={isLogin} setIsLogin={setIsLogin}/>
        </Route>
        <Route path='/field-details/:id' exact>
          <FieldDetails isLogin={isLogin} setIsLogin={setIsLogin}/>
        </Route>
        <Route path='/player-list' exact>
          <PlayerList isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path='/bio' exact>
          <Bio isLogin={isLogin} setIsLogin={setIsLogin}/>
        </Route>
      </Switch>
    </>
  )
}

export default App;

