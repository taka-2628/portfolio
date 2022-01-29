import React, { useContext } from 'react';
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.css";

import Header from './Header';
import Home from './Home';
import Web from './Web';
import SpaceDesignTech from './SpaceDesignTech';
import SDTProject from './SDTProject';
import HowToDoNothing from './SDTProjects/HowToDoNothing';
import Photography from './Photography';


import { BackgroundContext } from './context/background';
import { web, sdt } from '../data/data';

import WebHardCoded from './WebHardCoded';

function App() {
  const { background } = useContext(BackgroundContext);

  return (
    <>
      <div className={background == "black-border" ? "border" : "none"}></div>
      <div className= {background}>
        <Header />
        <Switch>
          <Route exact path="/web">
            <Web data={web} />
          </Route>
          <Route path="/space-design-tech">
            <SpaceDesignTech data={sdt} />
          </Route>
          <Route exact path="/photography">
            <Photography/>
          </Route>
          <Route exact path="/web2">
            <WebHardCoded />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </>
    
  );
}

export default App;
