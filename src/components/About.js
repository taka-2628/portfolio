import React from "react";
import { useRouteMatch } from "react-router-dom";

function About(){
  const match = useRouteMatch();
  console.log(match);
  
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default About;