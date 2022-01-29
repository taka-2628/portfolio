import React, { useContext } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { BackgroundContext } from './context/background';

function SDTProjectList( {data} ){
  const match = useRouteMatch();
  const { setBackground } = useContext(BackgroundContext);

  const sdtProjects = data.map((project) => {
    return (
      <div key={project.id} className="card">
        <Link to={`${match.url}/${project.id}`} onClick={()=> setBackground("white")}>
          <img src={project.thumbnail} alt={project.title}></img>
        </Link>
      </div>
    )
  })

  return (
    <div className="cards">
        {sdtProjects}
    </div>
  )
}

export default SDTProjectList;