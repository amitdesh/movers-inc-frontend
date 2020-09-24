import React from "react";
import NavBar from "./navbar";

class Welcome extends React.Component {
  renderNavBar = () => {
    return <NavBar />;
  };

  render() {
    return (
      <div>
        <div class="landing-image" />
        <div class="container">
          <h1 className="main-title">Movers Inc.</h1>
          {this.renderNavBar()}
        </div>
      </div>
    );
  }
}

export default Welcome;
