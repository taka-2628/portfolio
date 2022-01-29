import React from "react";

function SharedKitchen({data}){

  const project = data.find(({ id }) => (id === "shared-kitchen"));
  
  return (
    <div className="sdt-project-container">
      <h1>{project.title}</h1>
      <div className="sdt-project-detail">
          <p>
            {project.detail.school} | {project.detail.year} | {project.detail.class} 
          </p>
          <p>
            Critic: {project.detail.critic}
          </p>
          {
            project.collaborators ? 
            <p>Collaborators: {project.collaborators.map((collaborator, index) => (<span key={index}><a href={collaborator.url}>{collaborator.name}</a></span>))}</p>:
            null
          }
      </div>
      <img src={project.content.cover_image}></img>
    </div>
  )
}

export default SharedKitchen;