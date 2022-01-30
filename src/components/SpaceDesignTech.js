import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import "../stylesheets/SpaceDesignTech.css";

import SDTProjectList from "./SDTProjectList";
import HowToDoNothing from './SDTProjects/HowToDoNothing';
import SharedKitchen from "./SDTProjects/SharedKitchen";
import UrbanCampsite from "./SDTProjects/UrbanCampsite";
import IlluminationSchool from "./SDTProjects/IlluminationSchool";


function SpaceDesignTech( {data} ){
  const match = useRouteMatch();
  console.log(match);
 
  return (
    <div id="space-design-tech">
          <Route exact path={`${match.url}`}>
            <SDTProjectList data={data}/>
          </Route>

          <Route exact path={`${match.url}/how-to-do-nothing`}>
            <HowToDoNothing data={data}/>
          </Route>
          <Route exact path={`${match.url}/shared-kitchen`}>
            <SharedKitchen data={data}/>
          </Route>
          <Route exact path={`${match.url}/urban-campsite`}>
            <UrbanCampsite data={data}/>
          </Route>
          <Route exact path={`${match.url}/illumination-school`}>
            <IlluminationSchool data={data}/>
          </Route>
    </div>
  )
}

export default SpaceDesignTech;