import React from "react";

class SignupForm extends React.Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    current_address: "",
    no_of_rooms: "",
    house_SF: "",
  };

  localSubmitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state);
  };

  changeHandler = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  render() {
    return (
      <form onSubmit={this.localSubmitHandler}>
        <label for="username">Enter a Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter a username"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        <label for="first_name">Enter your first name</label>
        <input
          type="text"
          name="first_name"
          placeholder="Enter first name"
          value={this.state.first_name}
          onChange={this.changeHandler}
        />
        <label for="last_name">Enter your last name</label>
        <input
          type="text"
          name="last_name"
          placeholder="Enter last name"
          value={this.state.last_name}
          onChange={this.changeHandler}
        />
        <label for="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder="Enter a password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <label for="address">Current Address</label>
        <input
          type="text"
          name="current_address"
          placeholder="Enter your current address"
          value={this.state.current_address}
          onChange={this.changeHandler}
        />
        <label for="apt-details">Number of Rooms in Apartment/House</label>
        <input
          type="number"
          name="no_of_rooms"
          placeholder="Enter number of rooms"
          value={this.state.no_of_rooms}
          onChange={this.changeHandler}
        />
        <label for="apt-size">Square Footage of Apartment/House</label>
        <input
          type="number"
          name="house_SF"
          placeholder="Enter square footage of apartment/house"
          value={this.state.house_SF}
          onChange={this.changeHandler}
        />
        <button type="submit">Create New Profile</button>
      </form>
    );
  }
}

export default SignupForm;
