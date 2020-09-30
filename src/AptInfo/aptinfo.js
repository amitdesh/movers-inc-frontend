import React from "react";

class AptInfo extends React.Component {
  localDeleteHandler = () => {
    this.props.deleteHandler(this.props.dest.id);
  };

  render() {
    return (
      <div>
        <h1>Moving Destination: {this.props.dest.location}</h1>
        <h2>Date of Move: {this.props.dest.date}</h2>
        <h2>Time of Move: {this.props.dest.time}</h2>
        <h2>Price of Move: PLACEHOLDER</h2>
        <button>See Moving Inventory</button>
        <button>Edit Move Request</button>
        <button onClick={this.localDeleteHandler}>Delete Move Request</button>
      </div>
    );
  }
}

export default AptInfo;
