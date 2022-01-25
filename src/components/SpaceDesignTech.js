import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import "../stylesheets/SpaceDesignTech.css";

import ProjectList from "./ProjectList";
import Project from "./Project";

function SpaceDesignTech( {data} ){
  const match = useRouteMatch();
  console.log(match);


  return (
    <div>
      <Route exact path={match.url}>
        <ProjectList data={data}/>
      </Route>
      
      <Project />
    </div>
  )
}

export default SpaceDesignTech;