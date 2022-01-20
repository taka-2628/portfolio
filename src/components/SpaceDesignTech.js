import React from "react";
import { useRouteMatch } from "react-router-dom";

function SpaceDesignTech(){
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <h1>Space | Design | Tech</h1>

      
    </div>
  )
}

export default SpaceDesignTech;