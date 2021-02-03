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
import Confirm from '../src/pages/booking/component/confirm'


function App(state) {
  const [tokens, setTokens] = useState({
    tokenUser: ''
  });
  const token = localStorage.getItem('token')
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
        token ? <HeaderAuth /> : <HeaderNonAuth isLogin={isLogin} />
      }
      <Switch>
    <React.StrictMode>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/browseFields' exact>
          <BrowseFields />
        </Route>
        <Route path='/field-details/:id' exact>
          <FieldDetails isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path='/player-list' exact>
          <PlayerList />
        </Route>
        <Route path='/bio' exact>
          <Bio />
        </Route>
        <Route path='/createField' exact>
          <CreateField isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path='/confirm'>
          <Confirm />
        </Route>
        </React.StrictMode>
      </Switch>
    </>
  )
}
export default App;

