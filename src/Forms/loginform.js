import React from "react";
import "./newmoveform.css";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  localSubmitHandler = (e) => {
    e.preventDefault();
    this.props.loginHandler(this.state);
    this.setState({
      [e.target.name]: "",
    });
  };

  changeHandler = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  render() {
    return (
      <div>
        <h1>Log-in Here</h1>
        <form onSubmit={this.localSubmitHandler}>
          <table className="login-form">
            <tr>
              <td>
                <label for="username">Username</label>
              </td>
              <td>
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="Enter Username"
                  value={this.state.username}
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="password">Password</label>
              </td>
              <td>
                <input
                  type="text"
                  name="password"
                  required
                  placeholder="Input Password"
                  value={this.state.password}
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <br></br>
                <button className="submit-btn" type="submit">
                  Login
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default LoginForm;
