import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar(){
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/web"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Web
      </NavLink>
      <NavLink
        to="/architecture"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Architecture
      </NavLink>
      <NavLink
        to="/photography"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Photography
      </NavLink>
    </div>
  )
}

export default NavBar;