import React, { useState } from "react";
import { Link } from "react-router-dom";

function SelectedWork( { web, sdt } ){
  const [ filterBy, setFilterBy ] = useState("all");

  const webSelected = web.filter((project) => project.selected);
  const webFiltered = (filterBy === "all") ? webSelected : webSelected.filter((project) => project.tags.includes(filterBy));
  const webToDisplay = webFiltered.map((project) => {
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

  const sdtSelected = sdt.filter((project) => project.selected);
  const sdtFiltered = (filterBy === "all") ? sdtSelected : sdtSelected.filter((project) => project.tags.includes(filterBy));
  const sdtToDisplay = sdtFiltered.map((project) => {
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
        <span style={(filterBy === "all") ? {textDecoration: "underline"} : null} onClick={() => setFilterBy("all")}>-ALL</span>
        <span style={(filterBy === "web") ? {textDecoration: "underline"} : null} onClick={() => setFilterBy("web")}>#web</span>
        <span style={(filterBy === "IOT") ? {textDecoration: "underline"} : null} onClick={() => setFilterBy("IOT")}>#IOT</span>
        <span style={(filterBy === "data visualization") ? {textDecoration: "underline"} : null}onClick={() => setFilterBy("data visualization")}>#data visualization</span>
        <span style={(filterBy === "spatial tech") ? {textDecoration: "underline"} : null} onClick={() => setFilterBy("spatial tech")}>#spatial tech</span>
        <span style={(filterBy === "experience design") ? {textDecoration: "underline"} : null} onClick={() => setFilterBy("experience design")}>#experience design</span>
        <span style={(filterBy === "architecture") ? {textDecoration: "underline"} : null} onClick={() => setFilterBy("architecture")}>#architecture</span>
      </div>
      <div className="grid-container">
        {webToDisplay}
        {sdtToDisplay}
      </div>
    </div>
  )
}

export default SelectedWork;