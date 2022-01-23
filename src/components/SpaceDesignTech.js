import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";

import ProjectList from "./ProjectList";
import Project from "./Project";
//import c from "../assets/space-design-tech/a-IV-01.jpg";

function SpaceDesignTech(){
  const match = useRouteMatch();
  console.log(match);
  //console.log(c);
  const [a, setA] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/thumbnails")
      .then((res) => res.json())
      .then((data) => setA(data))
  }, []);

  const cat = a.map((project) => {return <img src={project.image}></img>}) 

  return (
    <div>
      <Route exact path={match.url}>
        <ProjectList data={a}/>
      </Route>

      {cat}
      
      <h1>Space | Design | Tech</h1>
      <Project />
    </div>
  )
}

export default SpaceDesignTech;