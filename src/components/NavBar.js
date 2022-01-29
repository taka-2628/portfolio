import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BackgroundContext } from './context/background';

function NavBar(){
  const { background, setBackground } = useContext(BackgroundContext);

  const linkStyles = {
    display: "inline-block",
    padding: "0 0 0 24px",
    textDecoration: "none",
    color: background !== "black" ? "black" : "white",
  }

  return (
    <nav>
      <NavLink
        onClick={()=> setBackground("black-border")}
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          textDecoration: "underline",
        }}
      >
        Home
      </NavLink>
      <NavLink
        onClick={()=> setBackground("black")}
        to="/web"
        exact
        style={linkStyles}
        activeStyle={{
          textDecoration: "underline",
        }}
      >
        Web
      </NavLink>
      <NavLink
        onClick={()=> setBackground("black-border")}
        to="/space-design-tech"
        exact
        style={linkStyles}
        activeStyle={{
          textDecoration: "underline",
        }}
      >
        Space + Design + Tech
      </NavLink>
      <NavLink
        to="/photography"
        exact
        style={linkStyles}
        activeStyle={{
          textDecoration: "underline",
        }}
      >
        Photography
      </NavLink>
    </nav>
  )
}

export default NavBar;