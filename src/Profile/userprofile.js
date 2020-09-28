import React from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import NewMoveForm from "../Forms/newmoveform";

class UserProfile extends React.Component {
  submitHandler = (destinationObj) => {
    this.createDestination(destinationObj);
  };

  createDestination = (destObj) => {
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer <${this.props.profileData.jwt}`,
      },
      body: JSON.stringify({
        user_id: this.props.profileData.user.id,
        location: destObj.location,
        time: destObj.time,
        date: destObj.time,
      }),
    };
    fetch("http://localhost:3000/destinations", options)
      .then((resp) => resp.json())
      .then(console.log);
  };

  renderMoveForm = () => {
    return <NewMoveForm submitHandler={this.submitHandler} />;
  };

  render() {
    console.log(this.props.profileData);
    return this.props.profileData ? (
      <div>
        <h1>Welcome to Movers Inc, {this.props.profileData.username}</h1>
        <h3>Current Profile Details</h3>
        <h3>Create a New Mover Request</h3>
        <NavLink to="/newmoveform">
          <button onClick={this.renderMoveForm}>Create New Move Request</button>
        </NavLink>
        <h3>View All Move Requests</h3>
        {/* <Switch>
          <Route
            path="/profile/newmoveform"
            render={() => {
              this.renderMoveForm();
            }}
          />
        </Switch> */}
      </div>
    ) : (
      <h1>Profile is loading</h1>
    );
  }
}

export default UserProfile;
