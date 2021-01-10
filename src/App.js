import React from 'react'
import HeaderNonAuth from './pages/header/headerNonAuth'
import LandingPage from '../src/pages/landingPage/landingPage'
import BrowseFields from './pages/FieldList/BrowseFields'
import FieldDetails from './pages/fieldDetail/fieldDetail'
import PlayerList from './pages/playerList/playerList'
import Bio from './pages/Profile/Bio'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <HeaderNonAuth />
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/browseFields' exact>
          <BrowseFields />
        </Route>
        <Route path='/field-details' exact>
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

