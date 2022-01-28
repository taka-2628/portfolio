import React from "react";
import { useParams } from "react-router-dom";

function SDTProject({ data }){
  const params = useParams();
  console.log(params);
  
  const projectToDisplay = data.filter(project => (project.id === params.id)).map(selectedProject => (<img key={selectedProject.title} src={selectedProject.cover}></img>));
   
  return (
    <div>
      <h1>hello</h1>
      { projectToDisplay }
    </div>
  )
}

export default SDTProject;