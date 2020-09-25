import React from "react";
import NavBar from "./navbar";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div class="landing-image" />
        <div class="container">
          <h1 className="main-title">Movers Inc.</h1>
        </div>
      </div>
    );
  }
}

export default Welcome;
