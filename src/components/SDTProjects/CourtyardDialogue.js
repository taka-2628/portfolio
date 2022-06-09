import React from "react";
import Comments from "../Comments";

function CourtyardDialogue({data}){
  const project = data.find(({ id }) => (id === "courtyard-dialogue"));

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
        <img className="urban-campsite-img" src={project.images.cover_image}></img>
        <img className="urban-campsite-img" src={project.images.image2}></img>
        <img className="urban-campsite-img" src={project.images.image3}></img>
        <img className="urban-campsite-img" src={project.images.image4}></img>
        <img className="urban-campsite-img" src={project.images.image5}></img>
        <img className="urban-campsite-img" src={project.images.image6}></img>
        <img className="urban-campsite-img" src={project.images.image7}></img>
        <img className="urban-campsite-img" src={project.images.image8}></img>
        <img className="urban-campsite-img" src={project.images.image9}></img>
        <img className="urban-campsite-img" src={project.images.image10}></img>
        <img className="urban-campsite-img" src={project.images.image11}></img>
        <img className="urban-campsite-img" src={project.images.image12}></img>
      </div>
    </div>
  )
}

export default CourtyardDialogue;