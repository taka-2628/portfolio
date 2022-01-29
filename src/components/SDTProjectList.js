import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

function SDTProjectList( {data} ){
  const match = useRouteMatch();

  const sdtProjects = data.map((project) => {
    return (
      <div key={project.id} className="card">
        <Link to={`${match.url}/${project.id}`}>
          <img src={project.thumbnail} alt={project.title}></img>
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

export default SDTProjectList;