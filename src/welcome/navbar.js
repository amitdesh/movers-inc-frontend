import React from "react";
import { NavLink } from "react-router-dom";
import "./welcome.css";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/welcome">
          <h1 className="page-title">Movers Inc.</h1>
        </NavLink>
        <NavLink to="/login">
          <button className="button">
            <h3>Login</h3>
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="button">
            <h3>Sign-up</h3>
          </button>
        </NavLink>
        <NavLink to="/profile">
          <button className="button">
            <h3>Profile Page</h3>
          </button>
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
