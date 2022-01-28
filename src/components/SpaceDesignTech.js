import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import "../stylesheets/SpaceDesignTech.css";

import SDTProjectList from "./SDTProjectList";
import HowToDoNothing from './HowToDoNothing';
import SharedKitchen from "./SharedKitchen";


function SpaceDesignTech( {data} ){
  const match = useRouteMatch();
  console.log(match);
 
  return (
    <div className="cards">
        {/*sdtProjects*/}
        
          <Route exact path={`${match.url}`}>
            <SDTProjectList data={data}/>
          </Route>

          <Route exact path={`${match.url}/how-to-do-nothing`}>
            <HowToDoNothing data={data}/>
          </Route>
          <Route exact path={`${match.url}/shared-kitchen`}>
            <SharedKitchen data={data}/>
          </Route>

    </div>
  )
}

export default SpaceDesignTech;