import React from "react";
import { useRouteMatch } from "react-router-dom";
import "../stylesheets/Home.css";

import SelectedWork from "./SelectedWorks";

function Home(){
  const match = useRouteMatch();
  console.log(match);
  
  return (
    <div id="home">
      <h1 id="name">Takashi Honzawa</h1>
      <p id="self-description">Architectural Designer turned Creative Developer/Product Designer.</p>
      <p>I am now finishing my Master of Architecture degree at Columbia University and Software Engineering program at Flatiron School.</p>
      <SelectedWork />
    </div>
  )
}

export default Home;