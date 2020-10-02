import React from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import NewMoveForm from "../Forms/newmoveform";
import UpdateUserForm from "../Forms/updateuserform";
import AptInfo from "../AptInfo/aptinfo";
import "./userprofile.css";

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

  updateHandler = (userObj) => {
    let options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        authorization: `Bearer ${this.props.profileData.jwt}`,
      },
      body: JSON.stringify({ user: userObj }),
    };
    fetch(
      `http://localhost:3000/users/${this.props.profileData.user.id}`,
      options
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.props.setUser(data);
        this.props.history.push(`/profile`);
      });
  };

  deleteHandler = (destID) => {
    let options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${this.props.profileData.jwt}`,
      },
    };
    fetch("http://localhost:3000/destinations/" + destID, options).then(
      (data) => {
        let updatedDestination = this.state.destinations.filter(
          (dest) => dest.id !== destID
        );
        this.setState({
          destinations: updatedDestination,
        });
        this.props.history.push(`/profile`);
      }
    );
  };

  deleteUserHandler = () => {
    let token = localStorage.getItem("token");
    let options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(
      "http://localhost:3000/users/" + this.props.profileData.user.id,
      options
    )
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", "");
        this.props.history.push(`/welcome`);
      });
  };

  render() {
    console.log("This is the profile data JWT", this.props.profileData);
    return this.props.profileData ? (
      <span>
        <h1>Welcome, {this.props.profileData.user.first_name}</h1>
        <div className="container-1">
          <table className="login-form">
            <tr>
              <td>
                <h3>Current Profile Details</h3>
              </td>
            </tr>
            <tr>
              <td>
                <label for="username">Username</label>
              </td>
              <td>
                <h4>{this.props.profileData.user.username}</h4>
              </td>
            </tr>
            <tr>
              <td>
                <label for="first-name">First Name</label>
              </td>
              <td>
                <h4>{this.props.profileData.user.first_name}</h4>
              </td>
            </tr>
            <tr>
              <td>
                <label for="last-name">Last Name</label>
              </td>
              <td>
                <h4>{this.props.profileData.user.last_name}</h4>
              </td>
            </tr>
            <tr>
              <td>
                <label for="address">Current Address</label>
              </td>
              <td>
                <h4>{this.props.profileData.user.current_address}</h4>
              </td>
            </tr>
            <tr>
              <td>
                <label for="no-of-rooms">Number of Rooms</label>
              </td>
              <td>
                <h4>{this.props.profileData.user.no_of_rooms} room(s)</h4>
              </td>
            </tr>
            <tr>
              <td>
                <label for="apt-size">Apartment Size</label>
              </td>
              <td>
                <h4>{this.props.profileData.user.house_SF} SF</h4>
              </td>
            </tr>
          </table>
        </div>
        <div className="container-2">
          <h3>Profile Actions</h3>
          <NavLink to="/profile/updateuser">
            <h4>
              <button className="btn">Update User Profile Information</button>
            </h4>
          </NavLink>
          <NavLink to="/profile/newmoveform">
            <h4>
              <button className="btn">Schedule a New Move</button>
            </h4>
          </NavLink>
          <h4>
            <button className="btn" onClick={this.deleteUserHandler}>
              Delete User Account
            </button>
          </h4>
        </div>
        <div className="container-2">
          <h3>Current Move Requests</h3>
          {this.displayNewMovingApts()}
        </div>
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
          <Route
            path="/profile/updateuser"
            render={() => (
              <UpdateUserForm
                submitHandler={this.submitHandler}
                profileData={this.props.profileData}
                inventory={this.state.inventories}
                updateHandler={this.updateHandler}
              />
            )}
          />
        </Switch>
      </span>
    ) : (
      <h1>Profile is loading</h1>
    );
  }
}

export default withRouter(UserProfile);
