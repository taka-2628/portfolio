import React from "react";
import { useParams } from "react-router-dom";

function SDTProject({ data }){
  const params = useParams();
  console.log(params);
 
  return (
    <div>
      <h1>hello</h1>
      { data.filter(project => (project.id = params.id)).map(selectedProject => (<img key={selectedProject.title} src={selectedProject.cover}></img>)) }
    </div>
  )
}

export default SDTProject;