import React from "react";
import { Route, NavLink } from "react-router-dom";
import NewMoveForm from "../Forms/newmoveform";

class UserProfile extends React.Component {
  render() {
    console.log(this.props.profileData);
    return this.props.profileData ? (
      <div>
        <h1>Welcome to Movers Inc, {this.props.profileData.username}</h1>
        <h3>Current Profile Details</h3>
        <h3>Create a New Mover Request</h3>
        <NavLink to="/newmoveform">
          <button>Create New Move Request</button>
        </NavLink>
        <h3>View All Move Requests</h3>
      </div>
    ) : (
      <h1>Profile is loading</h1>
    );
  }
}

export default UserProfile;
