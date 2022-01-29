import React from "react";

function SharedKitchen({data}){

  const projectClicked = data.filter(project => (project.id === "shared-kitchen"));
  const projectToDisplay = projectClicked.map(project => {
        if(project.selected){
          return (
            <div key={project.title}>
              <h2>{project.title}</h2>
              <div>
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
      });
  
  return (
    <div>
      { projectToDisplay }
    </div>
  )
}

export default SharedKitchen;