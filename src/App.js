import React from 'react'
import ParticalBackground from './components/Particalbg';
import SearchPage from './components/SearchPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PlayerProfile from './components/PlayerProfile';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>

        <Route exact path='/'>
          <ParticalBackground/>
          <SearchPage/>
        </Route>

        <Route path='/player-profile'>
        <ParticalBackground/>
          <PlayerProfile/>
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
