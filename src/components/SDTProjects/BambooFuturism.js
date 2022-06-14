import React from "react";

function BambooFuturism({data}){
  const project = data.find(({ id }) => (id === "bamboo-futurism"));

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
          <em>Bamboo Futurism</em> envisions a sustainable future of Jamaica where culms of baboo are used as the main construction material. Bamboo’s structural durability, incredible speed of growth, and maleability makes it an ideal material to replace the concrete and steel constructions that we see in Jamaica today.
        </p>
        <p>Renderings and animations are created using Rhino 3D, Blender and Twinmotion.</p>
        <img className="urban-campsite-img" src={project.images.cover_image}></img>
        <a href="https://www.youtube.com/watch?v=oJQudNoy110" target="_blank" rel="noopener noreferrer"><img className="urban-campsite-img" src={project.images.image2}></img></a>
        <a href="https://www.youtube.com/watch?v=npkSzuSWc9U" target="_blank" rel="noopener noreferrer"><img className="urban-campsite-img" src={project.images.image3}></img></a>
      </div>
    </div>
  )
}

export default BambooFuturism;