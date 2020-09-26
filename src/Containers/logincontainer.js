import React from "react";
import LoginForm from "../Forms/loginform";

class LoginContainer extends React.Component {
  renderLoginForm = () => {
    return <LoginForm submitHandler={this.props.submitHandler} />;
  };

  render() {
    return <div>{this.renderLoginForm()}</div>;
  }
}

export default LoginContainer;
