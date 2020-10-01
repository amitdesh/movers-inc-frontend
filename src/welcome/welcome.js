import React from "react";
import NavBar from "./navbar";
import "./welcome.css";

class Welcome extends React.Component {
  render() {
    return (
      <div class="background">
        <span className="container">
          <NavBar />
        </span>
      </div>
    );
  }
}

export default Welcome;
