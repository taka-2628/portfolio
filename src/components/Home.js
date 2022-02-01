import React from "react";
import { useRouteMatch } from "react-router-dom";
import SelectedWork from "./SelectedWorks";

function Home(){
  const match = useRouteMatch();
  console.log(match);
  
  return (
    <div id="home">
      <h1>I'm Takashi Honzawa</h1>
      <p>He is a creative developer, product designer, software engineer, experience designer, </p>
      <SelectedWork />
    </div>
  )
}

export default Home;