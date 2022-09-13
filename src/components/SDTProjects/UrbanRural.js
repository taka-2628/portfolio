import React from "react";

function UrbanRural({data}){
  const project = data.find(({ id }) => (id === "urban-rural"));

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
        The project investigates the political phenomenon of ‘Red Rural Blue Urban’ in relation to the built environment. Borrowing the tools of statistical modeling and data visualization, it visualizes the correlation between the voting pattern and the ratio of ‘built area’ to ‘unbuilt area’ in voting precincts.
        </p>
        <p>
        The project focuses on four counties in Nebraska, which is one of the several states with a conspicuous divide between the urban and the rural. The ratio of built area to unbuilt area in voting precincts in the counties are analyzed in relation to the percentage lead of the Republican party in the precincts. The voting data and geometries of voting precincts were taken from New York Time's "Extremely Detailed Map of the 2020 Election. The building footprint geometries from Microsoft's US Buildings Footprint datasets was used to calculate the percentage of built area in voting precincts and subtracted from the geometries of voting precincts to create Nori-Map-like-analysis drawings.
        </p>
        <img className="urban-campsite-img" src={project.images.cover_image}></img>
        <img className="urban-campsite-img" src={project.images.image2}></img>
        <img className="urban-campsite-img" src={project.images.image3}></img>
        <img className="urban-campsite-img" src={project.images.image4}></img>
        <img className="urban-campsite-img" src={project.images.image5}></img>
        <img className="urban-campsite-img" src={project.images.image6}></img>
        <img className="urban-campsite-img" src={project.images.image7}></img>
        <img className="urban-campsite-img" src={project.images.image8}></img>
        <img className="urban-campsite-img" src={project.images.image9}></img>
      </div>
    </div>
  )
}

export default UrbanRural;