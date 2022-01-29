import React from "react";

function HowToDoNothing({data}){

  const project = data.find(({ id }) => (id === "how-to-do-nothing"));
  console.log(project);
  
  return (
    <div>
      <div>
        <h2>{project.title}</h2>
          <p>
            {project.detail.school} | {project.detail.year} | {project.detail.class} 
          </p>
          <p>
            Critic: {project.detail.critic}
          </p>
          {
            project.collaborators ? 
            <p>Collaborators: {project.collaborators.map((collaborator, index) => (<a key={index} href={collaborator.url}>{collaborator.name} </a>))}</p>:
            null
          }
      </div>
      <img src={project.content.cover_image}></img>
    </div>
  )
}

export default HowToDoNothing;