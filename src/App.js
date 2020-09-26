import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./welcome/welcome";
import "./welcome/welcome.css";
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

  render() {
    return (
      <div>
        <Welcome />
        <Switch>
          <Route
            path="/login"
            render={() => (
              <LoginContainer user={this.state.user} setUser={this.setUser} />
            )}
          />
          <Route
            path="/signup"
            render={() => (
              <SignupContainer user={this.state.user} setUser={this.setUser} />
            )}
          />
          <Route
            path="/profile"
            render={() => <ProfileContainer profileData={this.state.user} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
