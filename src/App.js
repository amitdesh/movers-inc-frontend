import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Welcome from "./welcome/welcome";
import "./welcome/welcome.css";
import LoginForm from "./Forms/loginform";
import SignupContainer from "./Containers/signupcontainer";
import NewMoveForm from "./Forms/newmoveform";
import NavBar from "./welcome/navbar";

class App extends React.Component {
  state = {
    user: null,
  };

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
      .then((user) => {
        console.log(user, "Successful POST request to users db");
      });
  };

  loginHandler = (userObj) => {
    this.loginRequest(userObj);
  };

  loginRequest = (userObj) => {
    let options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: "Nearer <token>",
      },
    };
    fetch("http://localhost:3000/users/profile", options)
      .then((resp) => resp.json())
      .then(console.log);
  };

  render() {
    return (
      <div>
        <NavBar />
        <Route
          path="/login"
          render={() => (
            <LoginForm
              user={this.state.user}
              submitHandler={this.loginHandler}
            />
          )}
        />
        <Route
          path="/signup"
          render={() => (
            <SignupContainer
              user={this.state.user}
              submitHandler={this.signupHandler}
            />
          )}
        />
        <Route path="/users/:id/newmove" render={() => <NewMoveForm />} />
      </div>
    );
  }
}

export default App;
