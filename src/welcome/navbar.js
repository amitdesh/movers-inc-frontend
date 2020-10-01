import React from "react";
import { NavLink } from "react-router-dom";
import "./welcome.css";

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <NavLink to="/welcome">
          <li>
            <button className="button">
              <h3>Home</h3>
            </button>
          </li>
        </NavLink>
        <NavLink to="/login">
          <li className="li-button">
            <button className="button">
              <h3>Login</h3>
            </button>
          </li>
        </NavLink>
        <NavLink to="/signup">
          <li className="li-button">
            <button className="button">
              <h3>Sign-up</h3>
            </button>
          </li>
        </NavLink>
        <NavLink to="/profile">
          <li className="li-button">
            <button className="button">
              <h3>Profile Page</h3>
            </button>
          </li>
        </NavLink>
      </ul>
    );
  }
}

export default NavBar;
