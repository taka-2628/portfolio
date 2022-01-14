import React from "react";
import { useRouteMatch } from "react-router-dom";

function Architecture(){
  const match = useRouteMatch();
  console.log(match);
  
  return (
    <div>
      <h1>Architecture</h1>
    </div>
  )
}

export default Architecture;