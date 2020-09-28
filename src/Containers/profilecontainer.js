import React from "react";
import UserProfile from "../Profile/userprofile";

class ProfileContainer extends React.Component {
  renderUserProfile = () => {
    return <UserProfile profileData={this.props.profileData} />;
  };

  render() {
    return <div>{this.renderUserProfile()}</div>;
  }
}
export default ProfileContainer;
