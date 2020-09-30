import React from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import NewMoveForm from "../Forms/newmoveform";
import AptInfo from "../AptInfo/aptinfo";

class UserProfile extends React.Component {
  state = {
    user: [],
    destinations: [],
    inventories: [],
  };

  componentDidMount() {
    this.setState(
      () => ({
        destinations: this.props.profileData.user.destinations,
        inventories: [this.props.profileData],
      }),
      () => {
        console.log(this.state.destinations);
      }
    );
    this.displayNewMovingApts(this.state.destinations);
  }

  submitHandler = (requestBody) => {
    this.createDestinationInventory(requestBody);
  };

  createDestinationInventory = (requestBody) => {
    console.log(requestBody[0].destination, requestBody[1].invent);
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${this.props.profileData.jwt}`,
      },
      body: JSON.stringify({
        nested_array: requestBody,
        destination_id: "",
        inventory_id: "",
        count: "",
      }),
    };
    fetch("http://localhost:3000/destination_inventories", options)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState(() => ({
          destinations: data.user.destinations,
          inventories: [data.destination.inventories],
        }));
        this.props.history.push(`/profile`);
      });
  };

  displayNewMovingApts = () => {
    return this.state.destinations.map((dest) => (
      <AptInfo
        dest={dest}
        inv={this.state.inventories}
        deleteHandler={this.deleteHandler}
      />
    ));
  };

  deleteHandler = (destID) => {
    let options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${this.props.profileData.jwt}`,
      },
    };
    fetch("http://localhost:3000/destinations/" + destID, options)
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          let updatedDestination = this.state.destinations.filter(
            (dest) => dest.id !== destID
          );
          this.setState({
            destinations: updatedDestination,
          });
          this.props.history.push(`/profile`);
        } else {
          alert(
            "Move delete request could not be submitted. Please try again."
          );
          this.props.history.push(`/profile`);
        }
      });
  };

  inventoryLister = () => {};

  render() {
    console.log(this.state.inventories, this.props.profileData);
    return this.props.profileData ? (
      <div>
        <h1>Welcome to Movers Inc, {this.props.profileData.user.username}</h1>
        <h3>Current Profile Details</h3>
        <h3>Create a New Mover Request</h3>
        <NavLink to="/profile/newmoveform">
          <button>Schedule a New Move</button>
        </NavLink>
        <h3>Current Move Requests</h3>
        {this.displayNewMovingApts()}
        <Switch>
          <Route
            path="/profile/newmoveform"
            render={() => (
              <NewMoveForm
                submitHandler={this.submitHandler}
                profileData={this.props.profileData}
                inventory={this.state.inventories}
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
