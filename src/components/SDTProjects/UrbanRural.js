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
        The project investigates the political phenomenon of ‘Red Rural Blue Urban’ in relation to the built environment. Borrowing the tools of statistical modeling, geospatial operations and data visualization, it visualizes the correlation between the voting pattern in the 2020 Presidential electionand the ratio of ‘built area’ to ‘unbuilt area’ in voting precincts.
        </p>
        <div>
          <img className="li-cover" src={project.images.cover_image}></img>
        </div>
        
        <p>
        The project focuses on four counties in Nebraska, which is one of the several states with a conspicuous divide between the urban and the rural. The ratio of built area to unbuilt area in voting precincts in the counties are analyzed in relation to the percentage lead of the Republican party in the precincts. The voting data and geometries of voting precincts were taken from New York Time's "Extremely Detailed Map of the 2020 Election. The building footprint geometries from Microsoft's US Buildings Footprint datasets was used to calculate the percentage of built area in voting precincts and subtracted from the geometries of voting precincts to create Nori-Map-like-analysis drawings.
        </p>
        
        <h3 className="li-county">Lancaster, NE</h3>
        <div className="li-county-info">
          <p>Area: 846 mi²</p>
          <p>Population: 315,976</p>
          <div className="vote-pct-graph-cont">
            <span className="li-label">REP: </span>
            <div className="svg-cont">
              <svg className="voting-rep" id="voting-rep-lancaster"><rect /></svg>
              <span className="pct-span">44.9%</span>
            </div>
          </div>
          <div className="vote-pct-graph-cont">
            <span className="li-label">DEM: </span>
            <div className="svg-cont">
              <svg className="voting-dem" id="voting-dem-lancaster"><rect/></svg>
              <span className="pct-span">52.7%</span>
            </div>
          </div>
        </div>
        <div className="li-map-cont">
          <div>
            <img src={project.images.image3}></img>
            <span className="li-img-caption">Building Footprint Nori Map</span>
          </div>
          <div>
            <img src={project.images.image4}></img>
            <span className="li-img-caption">Voting Map</span>
          </div>
        </div>
        <div className="scatter-plot-cont">
          <img src={project.images.image2}></img>
          <span className="li-img-caption">Lancaster County Voting Precincts Scatter Plot</span>
        </div>
       
        <h3 className="li-county">Platte, NE</h3>
        <div className="li-county-info">
          <p>Area: 685 mi²</p>
          <p>Population: 33,250</p>
          <div className="vote-pct-graph-cont">
            <span className="li-label">REP: </span>
            <div className="svg-cont">
              <svg className="voting-rep" id="voting-rep-platte"> 
                <rect />
              </svg>
              <span className="pct-span">77.8%</span>
            </div>
          </div>
          <div className="vote-pct-graph-cont">
            <span className="li-label">DEM: </span>
            <div className="svg-cont">
              <svg className="voting-dem" id="voting-dem-platte">
                <rect/>
              </svg>
              <span className="pct-span">20.8%</span>
            </div>
          </div>
        </div>
        <div className="li-map-cont">
          <div>
            <img src={project.images.image6}></img>
            <span className="li-img-caption">Building Footprint Nori Map</span>
          </div>
          <div>
            <img src={project.images.image7}></img>
            <span className="li-img-caption">Voting Map</span>
          </div>
        </div>
        <div className="scatter-plot-cont">
          <img src={project.images.image5}></img>
          <span className="li-img-caption">Platte County Voting Precincts Scatter Plot</span>
        </div>
        
        
        <h3 className="li-county">Hall, NE</h3>
        <div className="li-county-info">
          <p>Area: 552 mi²</p>
          <p>Population: 61,338</p>
          <div className="vote-pct-graph-cont">
            <span className="li-label">REP: </span>
            <div className="svg-cont">
              <svg className="voting-rep" id="voting-rep-hall"> 
                <rect />
              </svg>
              <span className="pct-span">66.4%</span>
            </div>
          </div>
          <div className="vote-pct-graph-cont">
            <span className="li-label">DEM: </span>
            <div className="svg-cont">
              <svg className="voting-dem" id="voting-dem-hall">
                <rect/>
              </svg>
              <span className="pct-span">31.5%</span>
            </div>
          </div>
        </div>
        <div className="li-map-cont">
          <div>
            <img src={project.images.image9}></img>
            <span className="li-img-caption">Building Footprint Nori Map</span>
          </div>
          <div>
            <img src={project.images.image10}></img>
            <span className="li-img-caption">Voting Map</span>
          </div>
        </div>
        <div className="scatter-plot-cont">
          <img src={project.images.image8}></img>
          <span className="li-img-caption">Hall County Voting Precincts Scatter Plot</span>
        </div>
        
        
        <h3 className="li-county">Buffalo, NE</h3>
        <div className="li-county-info">
          <p>Area: 975 mi²</p>
          <p>Population: 49,594</p>
          <div className="vote-pct-graph-cont">
            <span className="li-label">REP: </span>
            <div className="svg-cont">
              <svg className="voting-rep" id="voting-rep-buffalo"> 
                <rect />
              </svg>
              <span className="pct-span">70.5%</span>
            </div>
          </div>
          <div className="vote-pct-graph-cont">
            <span className="li-label">DEM: </span>
            <div className="svg-cont">
              <svg className="voting-dem" id="voting-dem-buffalo">
                <rect/>
              </svg>
              <span className="pct-span">26.9%</span>
            </div>
          </div>
        </div>
        <div className="li-map-cont">
          <div>
            <img src={project.images.image12}></img>
            <span className="li-img-caption">Building Footprint Nori Map</span>
          </div>
          <div>
            <img src={project.images.image13}></img>
            <span className="li-img-caption">Voting Map</span>
          </div>
        </div>
        <div className="scatter-plot-cont">
          <img src={project.images.image11}></img>
          <span className="li-img-caption">Buffalo County Voting Precincts Scatter Plot</span>
        </div>
      </div>
    </div>
  )
}

export default UrbanRural;