import React, { useContext } from "react";

import { BackgroundContext } from './context/background';

function Footer(){
  const { background } = useContext(BackgroundContext);

  const footerStyle = {color: background !== "black" ? "black" : "white"};

  return(
    <div id="footer">
      <small style={footerStyle}>© Designed and Coded by Takashi Honzawa, 2022</small>
    </div>
  )
}

export default Footer;