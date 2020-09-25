import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Welcome from "./welcome/welcome";
import "./welcome/welcome.css";
import LoginForm from "./Forms/loginform";
import SignupForm from "./Forms/signupform";
import NewMoveForm from "./Forms/newmoveform";
import NavBar from "./welcome/navbar";

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/login" render={() => <LoginForm />} />
      <Route path="/signup" render={() => <SignupForm />} />
      <Route path="/users/:id/newmove" render={() => <NewMoveForm />} />
    </div>
  );
}

export default App;
