import React from "react";
import UserProfile from "../Profile/userprofile";

class ProfileContainer extends React.Component {
  renderUserProfile = () => {
    return (
      <UserProfile
        profileData={this.props.profileData}
        setUser={this.props.setUser}
      />
    );
  };

  render() {
    return <div>{this.renderUserProfile()}</div>;
  }
}
export default ProfileContainer;
