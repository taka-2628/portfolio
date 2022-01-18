import React, { useContext } from 'react';
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.css";

import Header from './Header';
import Home from './Home';
import Web from './Web';
import SpaceDesignTech from './SpaceDesignTech';
import Photography from './Photography';

import { BackgroundContext } from './context/background';

function App() {
  const { background } = useContext(BackgroundContext);
  // gray / black / border-black

  return (
    <div className= {background}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/web">
          <Web/>
        </Route>
        <Route exact path="/space-design-tech">
          <SpaceDesignTech />
        </Route>
        <Route exact path="/photography">
          <Photography/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
