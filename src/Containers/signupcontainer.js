import React from "react";
import SignupForm from "../Forms/signupform";

class SignupContainer extends React.Component {
  renderLoginForm = () => {
    return <SignupForm submitHandler={this.props.submitHandler} />;
  };

  render() {
    return <div>{this.renderLoginForm()}</div>;
  }
}

export default SignupContainer;
