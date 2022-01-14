import React from "react";
import { useRouteMatch } from "react-router-dom";

function Photography(){
  const match = useRouteMatch();
  console.log(match);
  
  return (
    <div>
      <h1>Photography</h1>
    </div>
  )
}

export default Photography;