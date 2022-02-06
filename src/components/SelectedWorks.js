import React from "react";
import { Link } from "react-router-dom";

function SelectedWork( { web, sdt } ){
  const webSelected = web.map((project) => {
    return (
      <div key={project.title} className="grid-item">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <div className="selected-img-container">
            <img className="web-thumb-selected" src={project.image} alt={project.title}></img>
          </div>
        </a>
        <div className="work-description">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <h2 className="title">{project.title}</h2>
          </a>
          <p className="project-detail">
            {project.school} | {project.year} 
          </p>
          
        </div>
      </div>
    )
  })
  const sdtSelected = sdt.map((project) => {
    return (
      <div key={project.id} className="grid-item">
        <Link to={`space-design-tech/${project.id}`}>
        <div className="selected-img-container">
          <img src={project.thumbnail} alt={project.title}></img>
        </div>
        </Link>
        <div className="work-description">
          <Link to={`space-design-tech/${project.id}`}>
            <h2 className="title">{project.title}</h2>
          </Link>
          <p className="project-detail">
            {project.detail.school} | {project.detail.year} 
          </p>
        </div>
      </div>
    )
  })

  return (
    <div id="selected-works">
      <h1>Selected Works</h1>
      <div className="grid-container">
        {webSelected}
        {sdtSelected}
      </div>
    </div>
  )
}

export default SelectedWork;