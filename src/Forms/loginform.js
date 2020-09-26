import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  localSubmitHandler = (e) => {
    e.preventDefault();
    this.props.loginHandler(this.state);
    this.setState({
      [e.target.name]: "",
    });
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
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        <label for="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder="Input Password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
