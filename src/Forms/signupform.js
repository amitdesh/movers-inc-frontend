import React from "react";

class SignupForm extends React.Component {
  render() {
    return (
      <form>
        <label for="username">Enter a Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter a username"
          value="Test"
        />
        <label for="first_name">Enter your first name</label>
        <input
          type="text"
          name="first-name"
          placeholder="Enter first name"
          value="Test first name"
        />
        <label for="last_name">Enter your last name</label>
        <input
          type="text"
          name="last-name"
          placeholder="Enter last name"
          value="Test last-name"
        />
        <label for="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder="Enter a password"
          value="Test"
        />
        <label for="address">Current Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your current address"
          value="Test address"
        />
        <label for="apt-details">Number of Rooms in Apartment/House</label>
        <input
          type="number"
          name="apt-details"
          placeholder="Enter number of rooms"
          value="Test apt-details"
        />
        <label for="apt-size">Square Footage of Apartment/House</label>
        <input
          type="number"
          name="apt-size"
          placeholder="Enter square footage of apartment/house"
          value="Test apt-size"
        />
        <label for="apt-details">
          Does your apartment/house have a garage?
        </label>
        <input
          type="radio"
          name="garage"
          placeholder="Does your apartment/house have a garage?"
          value="Test garage"
        />
        <button type="submit">Create New Profile</button>
      </form>
    );
  }
}

export default SignupForm;
