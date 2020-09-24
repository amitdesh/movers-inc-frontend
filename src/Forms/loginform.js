import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value="Test"
        />
        <label for="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder="Input Password"
          value="Test"
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
