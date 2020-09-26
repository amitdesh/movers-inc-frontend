import React from "react";
import LoginForm from "../Forms/loginform";
import { withRouter } from "react-router-dom";

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
        this.props.setUser(data.user);
        if (this.props.user) {
          this.props.history.push(`/profile`);
        } else {
          alert("Unable to log-in. Please try again");
          this.props.history.push(`/login`);
        }
        console.log(data);
      });
  };

  renderLoginForm = () => {
    return <LoginForm loginHandler={this.loginHandler} />;
  };

  render() {
    return <div>{this.renderLoginForm()}</div>;
  }
}

export default withRouter(LoginContainer);
