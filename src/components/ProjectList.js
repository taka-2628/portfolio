import React from "react";
import { Link } from "react-router-dom";

function ProjectList( {data} ){
  const sdtProjects = data.map((project) => {
    return (
      <div key={project.id} className="card">
        <a>
          <img src={project.cover} alt={project.title}></img>
        </a>
      </div>
    )
  })
  console.log(data)
  return (
    <div className="cards">
      {sdtProjects}
    </div>
  )
}

export default ProjectList;