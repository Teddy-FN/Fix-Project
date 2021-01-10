<<<<<<< HEAD
import React from 'react'
import LandingPage from '../src/pages/landingPage/landingPage'

function App() {
  return (
    <>
      <React.Fragment>
        <LandingPage />
      </React.Fragment>
    </>
  )
=======
import './App.css';
import FieldDetail from './component/fieldDetail/fieldDetail';
import PlayerList from './component/playerList/playerList'
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    // <div className="App">
    //   {/* <FieldDetail /> */}
    //   <PlayerList />
    // </div>
    <>
      <Switch>
        <Route path='/' exact>
          <FieldDetail />
        </Route>
        <Route path='/player-list' exact>
          <PlayerList />
        </Route>
      </Switch>
    </>
  );
>>>>>>> 1a7f451dd2706021e1b1630292415cd7712a65ad
}

export default App;

