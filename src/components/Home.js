import React from "react";
import { useRouteMatch } from "react-router-dom";
import SelectedWork from "./SelectedWorks";

function Home(){
  const match = useRouteMatch();
  console.log(match);
  
  return (
    <div id="home">
      <h1>Takashi</h1>
      <p>is a creative developer</p>
      <SelectedWork />
    </div>
  )
}

export default Home;