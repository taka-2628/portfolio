import React  from "react";
import { useRouteMatch } from "react-router-dom";
import "../stylesheets/GSAPPPortfolio.css";

import Footer from './Footer';

function GSAPPPortfolio(){
  const match = useRouteMatch();
  console.log(match);

  return (
    <div id="gsapp-portfolio">
      <div className="portfolio-content">
        <h1>Under Construction</h1>
      </div>
      <Footer />
    </div>
  )
}

export default GSAPPPortfolio;