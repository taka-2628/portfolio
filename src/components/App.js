import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './Header';
import About from './About';
import Web from './Web';
import Architecture from './Architecture';
import Photography from './Photography';

function App() {
  return (
    <div className="App">
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
