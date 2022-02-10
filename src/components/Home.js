import React from "react";
import { useRouteMatch } from "react-router-dom";
import "../stylesheets/Home.css";

import SelectedWork from "./SelectedWorks";
import Footer from './Footer';
import profileImage from "../assets/000062150015_rect2.jpg";

function Home( { web, sdt } ){
  const match = useRouteMatch();
  console.log(match);
  
  return (
    <div id="home">
      <div id="introduction">
        <div id="about-myself">
          <h1 id="name">Takashi Honzawa</h1>
          <p id="self-description"><strong>Architectural Designer</strong> turned <strong>Creative Developer/Product Designer</strong>.</p>
          <div>
            <p>I have experience in spatial, interactive, and visual designs and am skilled at front-end & back-end development. I am now finishing my Master of Architecture degree at Columbia University and Software Engineering program at Flatiron School.</p>
          </div>
        </div>
        <div id="profile-image-wrapper">
            <img src={profileImage}></img>
        </div>
      </div>

      <SelectedWork web={web} sdt={sdt} />
      <Footer />
    </div>
  )
}

export default Home;