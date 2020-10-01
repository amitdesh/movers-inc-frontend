import React from "react";
import NavBar from "./navbar";
import "./welcome.css";

class Welcome extends React.Component {
  render() {
    return (
      <span className="container">
        <NavBar />
      </span>
    );
  }
}

export default Welcome;
