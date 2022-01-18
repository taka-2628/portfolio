import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BackgroundContext } from './context/background';

function NavBar(){
  const { background } = useContext(BackgroundContext);
  const linkStyles = {
    display: "inline-block",
    padding: "0 0 0 24px",
    textDecoration: "none",
    color: background !== "black" ? "black" : "white",
  }

  return (
    <nav>
      <NavLink
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
        to="/architecture"
        exact
        style={linkStyles}
        activeStyle={{
          textDecoration: "underline",
        }}
      >
        Architecture
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