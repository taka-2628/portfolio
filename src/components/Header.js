import React, { useContext } from "react";
import NavBar from "./NavBar";
import { BackgroundContext } from './context/background';

function Header(){
  const { background } = useContext(BackgroundContext);

  const style = {color: background !== "black" ? "black" : "white"};
  
  return (
    <header>
      <h1 id="logo" style={style}>TH</h1>
      <NavBar />
    </header>
  )
}

export default Header;