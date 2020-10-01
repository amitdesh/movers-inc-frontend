import React from "react";
import "./newmoveform.css";

class UserUpdateForm extends React.Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    current_address: "",
    no_of_rooms: "",
    house_SF: "",
  };

  localUpdateHandler = (e) => {
    e.preventDefault();
    this.props.updateHandler(this.state);
  };

  changeHandler = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  render() {
    return (
      <div>
        <h1>Sign-up For a User Profile</h1>
        <form onSubmit={this.localSubmitHandler}>
          <table className="login-form">
            <tr>
              <td>
                <label for="username">Enter a Username</label>
              </td>
              <td>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter a username"
                  value={this.state.username}
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="first_name">Enter your first name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter first name"
                  value={this.state.first_name}
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="last_name">Enter your last name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter last name"
                  value={this.state.last_name}
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="password">Password</label>
              </td>
              <td>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter a password"
                  value={this.state.password}
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="address">Current Address</label>
              </td>
              <td>
                <input
                  type="text"
                  name="current_address"
                  placeholder="Enter your current address"
                  value={this.state.current_address}
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="apt-details">
                  Number of Rooms in Apartment/House
                </label>
              </td>
              <td>
                <input
                  type="number"
                  name="no_of_rooms"
                  placeholder="Enter number of rooms"
                  value={this.state.no_of_rooms}
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="apt-size">Square Footage of Apartment/House</label>
              </td>
              <td>
                <input
                  type="number"
                  name="house_SF"
                  placeholder="Enter square footage of apartment/house"
                  value={this.state.house_SF}
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <br></br>
                <button className="submit-btn" type="submit">
                  Update Profile Info
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default UserUpdateForm;
