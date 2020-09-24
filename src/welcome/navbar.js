import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <button className="button">
          <h3>Login</h3>
        </button>
        <button className="button">
          <h3>Sign-up</h3>
        </button>
        {/* <h3>Welcome {this.props.name}</h3> */}
      </div>
    );
  }
}

export default NavBar;
