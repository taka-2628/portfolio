import React from "react";
import { useRouteMatch } from "react-router-dom";

function Web(){
  const match = useRouteMatch();
  console.log(match);
  
  return (
    <div>
      <h1>Web</h1>
    </div>
  )
}

export default Web;