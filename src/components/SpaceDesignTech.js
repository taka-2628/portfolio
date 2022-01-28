import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import "../stylesheets/SpaceDesignTech.css";

function SpaceDesignTech( {data} ){
  const match = useRouteMatch();
  console.log(match);
  
  const sdtProjects = data.map((project) => {
    return (
      <div key={project.id} className="card">
        <Link to={`/space-design-tech/${project.id}`}>
          <img src={project.cover} alt={project.title}></img>
        </Link>
      </div>
    )
  })

  return (
    <div className="cards">
        {sdtProjects}
    </div>
  )
}

export default SpaceDesignTech;