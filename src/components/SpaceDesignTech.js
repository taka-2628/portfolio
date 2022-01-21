import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import ProjectList from "./ProjectList";
import Project from "./Project";

function SpaceDesignTech(){
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <Route exact path={match.url}>
        <ProjectList />
      </Route>
      <Route>
        
      </Route>
      
      <h1>Space | Design | Tech</h1>
      <Project />
    </div>
  )
}

export default SpaceDesignTech;