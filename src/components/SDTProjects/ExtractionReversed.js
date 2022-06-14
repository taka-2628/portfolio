import React from "react";

function ExtractionReversed({data}){
  const project = data.find(({ id }) => (id === "extraction-reversed"));

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
          Los Angeles’ physical and social infrastructures need to reflect the reality of energy scarcity. <em>Extraction Reversed</em> takes existing oil extraction practices and reverses them - from carbon extraction to carbon sequestration. It reclaims the Valero Oil Refinery and drill sites in Long Beach, CA into alternative energy production and experimental carbon capture methods to remove public health risk around the refinery.
        </p>

        <p>
          Adaptive infrastructure based on outdated energy productions is created to provide a framework of living that would be the new foundation for people to fill in - a model for a new way of living with climate change and uncertain weather patterns.
        </p>

        <img className="urban-campsite-img" src={project.images.cover_image}></img>

        

        <div id="gif-diagrams-container">
          <img src={project.images.image8}></img>
          <img src={project.images.image9}></img>
          <img src={project.images.image10}></img>
        </div>

        <img className="urban-campsite-img" src={project.images.image2}></img>
        <img className="urban-campsite-img" src={project.images.image3}></img>
        <img className="urban-campsite-img" src={project.images.image4}></img>
        <img className="urban-campsite-img" src={project.images.image5}></img>
        <img className="urban-campsite-img" src={project.images.image6}></img>
        <img className="urban-campsite-img" src={project.images.image7}></img>
      </div>
    </div>
  )
}

export default ExtractionReversed;