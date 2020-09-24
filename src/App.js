import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./welcome/welcome";
import "./welcome/welcome.css";
import LoginForm from "./Forms/loginform";
import SignupForm from "./Forms/signupform";
import NewMoveForm from "./Forms/newmoveform";

function App() {
  return (
    <div>
      <Welcome />
      <LoginForm />
      <SignupForm />
      <NewMoveForm />
    </div>
  );
}

export default App;
