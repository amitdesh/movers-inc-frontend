import React from "react";
import { NavLink } from "react-router-dom";

class UserProfile extends React.Component {
  render() {
    console.log(this.props.profileData);
    return (
      <div>
        <h1>Welcome to Movers Inc, {this.props.profileData.username}</h1>
        <h3>Current Profile Details</h3>
        <h3>Create a New Mover Request</h3>
        <NavLink to="/newmoveform">
          <button>Create New Move Request</button>
        </NavLink>
        <h3>View All Move Requests</h3>
      </div>
    );
  }
}

export default UserProfile;
