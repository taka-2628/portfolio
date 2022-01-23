import React from "react";
import { Link } from "react-router-dom";

function ProjectList(){
  const id = "ultrareal";

  return (
    <div>
      <h1>ProjectList</h1>
        <Link to={`/projects/${id}`}></Link>
    </div>
  )
}

export default ProjectList;