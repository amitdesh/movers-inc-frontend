import React from "react";
import UserProfile from "../Profile/userprofile";
import "../welcome/welcome.css";

class ProfileContainer extends React.Component {
  renderUserProfile = () => {
    return (
      <UserProfile
        profileData={this.props.profileData}
        setUser={this.props.setUser}
        updateHandler={this.props.updateHandler}
      />
    );
  };

  render() {
    return this.props.profileData ? (
      <div>{this.renderUserProfile()}</div>
    ) : (
      <h2>Please log in to view profile page.</h2>
    );
  }
}
export default ProfileContainer;
