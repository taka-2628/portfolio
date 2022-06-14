import React from "react";

function DesertOasis({data}){
  const project = data.find(({ id }) => (id === "desert-oasis"));

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
      <div className="sdt-project">
        <p>
          <em>Desert Oasis</em> is a rendering project that attemps to create ultrarealistic images of unreal scenes. It uses V-Ray for 3D Studio Max as the main engine for exploration and designing.
        </p>
        <img className="urban-campsite-img" src={project.images.cover_image}></img>
        <img className="urban-campsite-img" src={project.images.image2}></img>
        <img className="urban-campsite-img" src={project.images.image3}></img>
      </div>
    </div>
  )
}

export default DesertOasis;