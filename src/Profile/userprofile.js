import React from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import NewMoveForm from "../Forms/newmoveform";
import AptInfo from "../AptInfo/aptinfo";

class UserProfile extends React.Component {
  state = {
    user: [],
    destinations: [],
  };

  componentDidMount() {
    this.setState(() => ({
      destinations: this.props.profileData.user.destinations,
    }));
    this.displayNewMovingApts(this.state.destinations);
  }

  submitHandler = (destinationObj) => {
    this.createDestination(destinationObj);
    this.createInventory(destinationObj);
  };

  createDestination = (destObj) => {
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${this.props.profileData.jwt}`,
      },
      body: JSON.stringify({
        user_id: this.props.profileData.user.id,
        location: destObj.location,
        time: destObj.time,
        date: destObj.date,
      }),
    };
    fetch("http://localhost:3000/destinations", options)
      .then((resp) => resp.json())
      .then((data) => {
        if (this.props.profileData) {
          this.setState(() => ({
            destinations: [...this.state.destinations, data.destination],
          }));
          this.props.history.push(`/profile`);
          this.displayNewMovingApts(this.state.destinations);
        } else {
          alert("Unable to create new move request. Please try again.");
          this.props.history.push(`/profile/newmoveform`);
        }
      });
  };

  renderMoveForm = () => {
    return <NewMoveForm submitHandler={this.submitHandler} />;
  };

  displayNewMovingApts = (destList) => {
    return this.state.destinations.map((dest) => {
      return <AptInfo dest={dest} />;
    });
  };

  render() {
    return this.props.profileData ? (
      <div>
        <h1>Welcome to Movers Inc, {this.props.profileData.user.username}</h1>
        <h3>Current Profile Details</h3>
        <h3>Create a New Mover Request</h3>
        <NavLink to="/profile/newmoveform">
          <button onClick={this.renderMoveForm}>Create New Move Request</button>
        </NavLink>
        <h3>View All Move Requests</h3>
        {this.displayNewMovingApts()}
        <Switch>
          <Route
            path="/profile/newmoveform"
            render={() => (
              <NewMoveForm
                submitHandler={this.submitHandler}
                profileData={this.props.profileData}
              />
            )}
          />
        </Switch>
      </div>
    ) : (
      <h1>Profile is loading</h1>
    );
  }
}

export default withRouter(UserProfile);
