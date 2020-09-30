import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import InventoryInfo from "./inventoryinfo";

class AptInfo extends React.Component {
  localDeleteHandler = () => {
    this.props.deleteHandler(this.props.dest.id);
  };

  displayHandler = () => {
    let x = document.getElementById("inventory");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  iterateInventoryNames = () => {
    let inventory = this.props.dest.related_inventory;
    for (let i = 0; i < inventory.length; i++) {
      for (const [name, amt] of Object.entries(inventory[i])) {
        return (
          <h3>
            {inventory[name]} - {inventory[amt]}
          </h3>
        );
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Moving Destination: {this.props.dest.location}</h1>
        <h2>Date of Move: {this.props.dest.date}</h2>
        <h2>Time of Move: {this.props.dest.time}</h2>
        <h2>Price of Move: ${this.props.dest.total_price}</h2>
        {/* <button onClick={this.displayHandler}>See Moving Inventory</button>
        <div id="inventory">
          <h2>Inventory List</h2>
          {this.iterateInventoryNames()} */}
        <button onClick={this.localDeleteHandler}>Delete Move Request</button>
      </div>
    );
  }
}

export default AptInfo;
