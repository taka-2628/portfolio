import React from "react";
import { Link } from "react-router-dom";

function SelectedWork( { web, sdt } ){
  const webSelected = web.filter((project) => {
    return project.selected;
  }).map((project) => {
    return (
      <div key={project.title} className="grid-item">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img className="web-thumb-selected" src={project.image} alt={project.title}></img>
        </a>
        <div className="work-description-selected">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="linkgg">
            <h2 className="title">{project.title}</h2>
          </a>
          <div className="tag-wrapper">{project.tags.map((tag, index) => <p key={index} className="tag">#{tag}</p>)}</div>
        </div>
      </div>
    )
  })

  const sdtSelected = sdt.filter((project) => {
    return project.selected;
  }).map((project) => {
    return (
      <div key={project.id} className="grid-item">
        <Link to={`space-design-tech/${project.id}`}>
          <img src={project.thumbnail} alt={project.title}></img>
        </Link>
        <div className="work-description-selected">
          <Link to={`space-design-tech/${project.id}`} className="linkgg">
            <h2 className="title">{project.title}</h2>
          </Link>
          <div className="tag-wrapper">{project.tags.map((tag, index) => <p key={index} className="tag">#{tag}</p>)}</div>
        </div>
      </div>
    )
  })

  return (
    <div id="selected-works">
      <h1>Selected Works</h1>
      <div id="tags">
        <span>#web</span>
        <span>#IOT</span>
        <span>#data visualization</span>
        <span>#spatial tech</span>
        <span>#experience design</span>
        <span>#architecture</span>
      </div>
      <div className="grid-container">
        {webSelected}
        {sdtSelected}
      </div>
    </div>
  )
}

export default SelectedWork;