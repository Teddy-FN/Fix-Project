/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from "react-redux";
import HeaderNonAuth from './pages/header/headerNonAuth'
import HeaderAuth from './pages/header/headerAuth'
import LandingPage from '../src/pages/landingPage/landingPage'
import FieldDetails from './pages/fieldDetail/fieldDetail'
import BrowseFields from './pages/FieldList/BrowseFields'
import PlayerList from './pages/playerList/playerList'
import Bio from './pages/Profile/Bio'
import CreateField from './pages/adminPage/createField'
import { Switch, Route } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import SetDate from './pages/booking/component/setDate'
import SetTime from './pages/booking/component/setTime'


function App(state) {
  const [tokens, setTokens] = useState({
    tokenUser: ''
  });
  const [isLogin, setIsLogin] = useState(false);
  const loginUser = useSelector((state) => state.AuthReducer.isLoggedIn)
  console.log('Ini IsLogin', loginUser)

  useEffect(() => {
    // tokenUser();
    if ("token" in localStorage) {
      setTokens(true)
      setIsLogin(true)
    }
  }, [loginUser])

  return (
    <>
      {
        loginUser ? <HeaderAuth /> : <HeaderNonAuth isLogin={isLogin} />
      }
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/browseFields' exact>
          <BrowseFields isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path='/field-details/:id' exact>
          <FieldDetails isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path='/player-list' exact>
          <PlayerList isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path='/bio' exact>
          <Bio isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path='/createField' exact>
          <CreateField isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
      </Switch>
    </>
  )
}
export default App;

