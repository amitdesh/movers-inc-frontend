import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./welcome/welcome.css";
import Welcome from "./welcome/welcome";
import SignupContainer from "./Containers/signupcontainer";
import ProfileContainer from "./Containers/profilecontainer";
import LoginContainer from "./Containers/logincontainer";

class App extends React.Component {
  state = {
    user: null,
  };

  setUser = (userObj) => {
    this.setState(() => ({
      user: userObj,
    }));
  };

  componentDidUpdate = () => {
    let userID = this.state.user.id;
    this.getUser(userID);
  };

  getUser = (userID) => {
    let options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch(`http://localhost:3000/users/${userID}`, options)
      .then((resp) => resp.json())
      .then(console.log);
  };

  render() {
    console.log("This is the logged in user info", this.state.user);
    return (
      <span className="landing-image">
        <Welcome />
        <Switch>
          <Route
            path="/login"
            render={() => (
              <LoginContainer
                user={this.state.user}
                setUser={this.setUser}
                logoutUser={this.logoutUser}
              />
            )}
          />
          <Route
            path="/signup"
            render={() => (
              <SignupContainer
                user={this.state.user}
                setUser={this.setUser}
                logoutUser={this.logoutUser}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <ProfileContainer
                profileData={this.state.user}
                setUser={this.setUser}
                updateHandler={this.updateHandler}
              />
            )}
          />
        </Switch>
      </span>
    );
  }
}

export default App;
