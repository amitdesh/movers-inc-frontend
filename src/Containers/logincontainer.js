import React from "react";
import LoginForm from "../Forms/loginform";
import { withRouter } from "react-router-dom";
import "../welcome/welcome.css";

class LoginContainer extends React.Component {
  loginHandler = (userObj) => {
    this.loginRequest(userObj);
  };

  loginRequest = ({ username, password }) => {
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    fetch("http://localhost:3000/login", options)
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        this.props.setUser(data);
        if (this.props.user.id === undefined) {
          this.props.history.push(`/login`);
        } else {
          alert("Unable to log-in. Please try again");
          this.props.history.push(`/welcome`);
        }
      });
  };

  renderLoginForm = () => {
    return (
      <LoginForm
        loginHandler={this.loginHandler}
        logoutUser={this.props.logoutUser}
        user={this.props.user}
      />
    );
  };

  render() {
    return <div>{this.renderLoginForm()}</div>;
  }
}

export default withRouter(LoginContainer);
