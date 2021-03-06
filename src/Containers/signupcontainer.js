import React from "react";
import SignupForm from "../Forms/signupform";
import { withRouter } from "react-router-dom";
import "../welcome/welcome.css";

class SignupContainer extends React.Component {
  signupHandler = (userObj) => {
    this.postRequest(userObj);
  };

  postRequest = (userObj) => {
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ user: userObj }),
    };

    fetch("http://localhost:3000/users", options)
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        this.props.setUser(data);
        if (this.props.user) {
          this.props.history.push(`/profile`);
        } else {
          alert("Username is already taken. Please try another username");
          this.props.history.push(`/signup`);
        }
      });
  };

  renderLoginForm = () => {
    return (
      <SignupForm
        submitHandler={this.signupHandler}
        logoutUser={this.props.logoutUser}
        user={this.props.user}
      />
    );
  };

  render() {
    return <div>{this.renderLoginForm()}</div>;
  }
}

export default withRouter(SignupContainer);
