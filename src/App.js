import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

import { ItemTableList } from './components/ItemTableList';
import { WeaponTableList } from './components/WeaponTableList';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" render={() => <div style={{margin: "15px"}}>
            <header>
              <h1>Stick Ranger Item Reference</h1>
            </header>
            <div>
              <p>This site is a reference to the items and weapons from the Dan-Ball Java game "<a href="https://dan-ball.jp/en/javagame/ranger/">Stick Ranger</a>".</p>
            </div>
            <div>
              <h3>Dan-Ball</h3>
              <p>All images belong to Dan-Ball (Copyright (C) 2006), allowed for use by <a href="https://dan-ball.jp/en/qa.html#j9">Dan-Ball Terms of Use</a>, obtained from <a href="https://danball.fandom.com/wiki/Dan-Ball_Wiki">Dan-Ball Wiki</a>.</p>
            </div>
          </div>} />
          {/* WEAPONS */}
          <Route exact path="/gloves" render={() => <WeaponTableList category='gloves' />} />
          {/* DROPPED ITEMS */}
          <Route exact path="/cards" render={() => <ItemTableList category='cards' />} />
          <Route exact path="/jewels" render={() => <ItemTableList category='jewels' />} />
          <Route exact path="/stones" render={() => <ItemTableList category='stones' />} />
          <Route exact path="/crystals" render={() => <ItemTableList category='crystals' />} />
          <Route exact path="/medals" render={() => <ItemTableList category='medals' />} />
          <Route exact path="/charms" render={() => <ItemTableList category='charms' />} />
          <Route exact path="/spirits" render={() => <ItemTableList category='spirits' />} />
          <Route exact path="/crowns" render={() => <ItemTableList category='crowns' />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
