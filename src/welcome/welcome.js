import React from "react";
import NavBar from "./navbar";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div className="landing-image" />
        <div className="container">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default Welcome;
