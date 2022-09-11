import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import "../stylesheets/SpaceDesignTech.css";

import SDTProjectList from "./SDTProjectList";
import HowToDoNothing from './SDTProjects/HowToDoNothing';
import SharedKitchen from "./SDTProjects/SharedKitchen";
import UrbanCampsite from "./SDTProjects/UrbanCampsite";
import IlluminationSchool from "./SDTProjects/IlluminationSchool";
import CourtyardDialogue from "./SDTProjects/CourtyardDialogue";
import Continuum from "./SDTProjects/Continuum";
import BambooFuturism from "./SDTProjects/BambooFuturism";
import ExtractionReversed from "./SDTProjects/ExtractionReversed";
import DesertOasis from "./SDTProjects/DesertOasis";
import UrbanRural from "./SDTProjects/UrbanRural";

import Footer from './Footer';

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
          <Route exact path={`${match.url}/courtyard-dialogue`}>
            <CourtyardDialogue data={data}/>
          </Route>
          <Route exact path={`${match.url}/continuum`}>
            <Continuum data={data}/>
          </Route>
          <Route exact path={`${match.url}/bamboo-futurism`}>
            <BambooFuturism data={data}/>
          </Route>
          <Route exact path={`${match.url}/extraction-reversed`}>
            <ExtractionReversed data={data}/>
          </Route>
          <Route exact path={`${match.url}/desert-oasis`}>
            <DesertOasis data={data}/>
          </Route>
          <Route exact path={`${match.url}/urban-rural`}>
            <UrbanRural data={data}/>
          </Route>
          <Footer />
    </div>
  )
}

export default SpaceDesignTech;