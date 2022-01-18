import React, { useContext, useEffect }  from "react";
import { useRouteMatch } from "react-router-dom";
import { BackgroundContext } from './context/background';

import bundleGIF from "../assets/01-BUNDLE.gif";
import actorGIF from "../assets/02-52711-Actors.gif";
import mediumLogo from "../assets/medium-logo_white.png"

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
            <h2>BUNDLE</h2>
          </a>
          <p className="project-detail">
            Flatiron School | 2021 
            <a href="https://takashi-honzawa.medium.com/bundle-my-first-spa-project-3e1a7f692b27" target="_blank" rel="noopener noreferrer">
              <img className="website-logo" src={mediumLogo}></img>
            </a>
            <a href="https://takashi-honzawa.medium.com/bundle-my-first-spa-project-3e1a7f692b27" target="_blank" rel="noopener noreferrer">
              <img className="website-logo" src={mediumLogo}></img>
            </a>
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
            <h2>LIFE AND DEATH OF 52,711 ACTORS</h2>
          </a>
          <p className="project-detail">
            Columbia University | 2021
            <a href="https://takashi-honzawa.medium.com/bundle-my-first-spa-project-3e1a7f692b27" target="_blank" rel="noopener noreferrer">
              <img className="website-logo" src={mediumLogo}></img>
            </a>
            <a href="https://takashi-honzawa.medium.com/bundle-my-first-spa-project-3e1a7f692b27" target="_blank" rel="noopener noreferrer">
              <img className="website-logo" src={mediumLogo}></img>
            </a>
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