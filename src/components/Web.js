import React, { useContext, useEffect }  from "react";
import { useRouteMatch } from "react-router-dom";
import { BackgroundContext } from './context/background';
import "../stylesheets/Web.css";

import bundleGIF from "../assets/01-BUNDLE.gif";
import actorGIF from "../assets/02-52711-Actors.gif";
import mediumLogo from "../assets/medium-logo_white.png";
import githubLogo from "../assets/github-logo_white.png";

function Web(){
  const match = useRouteMatch();
  console.log(match);

  const { setBackground } = useContext(BackgroundContext);

  useEffect(()=> {
    setBackground("black")
  }, [])

  return (
    <div id="web">
      <div className="web-project-container">
        <a href="https://taka-2628.github.io/BUNDLE/" target="_blank" rel="noopener noreferrer">
          <img className="web-gif" src={bundleGIF}></img>
        </a>
        <div className="work-description">
          <a href="https://taka-2628.github.io/BUNDLE/" target="_blank" rel="noopener noreferrer" className="web-project-link">
            <h2 className="title">BUNDLE</h2>
          </a>
          <i className="subtitle">Single-page Application with Vanilla JavaScript and JSON-server on Heroku</i>
          <p className="project-detail">
            Flatiron School | 2021 |
            <span className="website-logo-wrapper">
              <a href="https://takashi-honzawa.medium.com/bundle-my-first-spa-project-3e1a7f692b27" target="_blank" rel="noopener noreferrer">
                <img className="website-logo" src={mediumLogo}></img>
              </a>
              <a href="https://github.com/taka-2628/portfolio" target="_blank" rel="noopener noreferrer">
                <img className="website-logo" src={githubLogo}></img>
              </a>
            </span>
          </p>
          <p className="paragraph">
            BUNDLE is a simple portfolio aggregator/tracker for stock and crypto investors. It fetches real-time price data from APIs and calculates the total value and unrealized gain/loss of a portfolio.
          </p>
        </div>
      </div>
      <div className="web-project-container">
        <a href="https://taka-2628.github.io/52711_ACTORS/" target="_blank" rel="noopener noreferrer">
          <img className="web-gif" src={actorGIF}></img>
        </a>

        <div className="work-description">
          <a href="https://taka-2628.github.io/52711_ACTORS/" target="_blank" rel="noopener noreferrer" className="web-project-link">
            <h2 className="title">LIFE AND DEATH OF 52,711 ACTORS</h2>
          </a>
          <i className="subtitle">Data Visualization with D3.js and Mapbox API</i>
          <p className="project-detail">
            Columbia University | 2021 |
            <span className="website-logo-wrapper">
              <a href="https://github.com/taka-2628/52711_ACTORS" target="_blank" rel="noopener noreferrer">
                <img className="website-logo" src={githubLogo}></img>
              </a>
            </span>
            <span className="collaborator">- in collaboration with&nbsp; 
              <a href="https://www.arch.columbia.edu/student-work?student_name_contains=Anays%20Gonzalez" target="_blank" rel="noopener noreferrer">Anays Gonzalez</a>
            </span>
          </p>
          <p className="paragraph">
            Data Visualization project that explores the correlation between the main genre of an actor and his or her maridge, divorce and cause of death. Are romance actors happily married? Do actors of the same genre die of the same cause?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Web;