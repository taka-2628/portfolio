import React, { useContext } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './Header';
import About from './About';
import Web from './Web';
import Architecture from './Architecture';
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
          <About/>
        </Route>
        <Route exact path="/web">
          <Web/>
        </Route>
        <Route exact path="/architecture">
          <Architecture/>
        </Route>
        <Route exact path="/photography">
          <Photography/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
