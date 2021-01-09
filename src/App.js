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
}

export default App;
