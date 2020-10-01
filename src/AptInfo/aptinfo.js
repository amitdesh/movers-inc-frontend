import React from "react";
import "../Forms/newmoveform.css";

class AptInfo extends React.Component {
  localDeleteHandler = () => {
    this.props.deleteHandler(this.props.dest.id);
  };

  //   displayHandler = () => {
  //     let x = document.getElementById("inventory");
  //     if (x.style.display === "block") {
  //       x.style.display = "none";
  //     } else {
  //       x.style.display = "block";
  //     }
  //   };

  //   iterateInventoryNames = () => {
  //     let inventory = this.props.dest.related_inventory;
  //     for (let i = 0; i < inventory.length; i++) {
  //       for (const [name, amt] of Object.entries(inventory[i])) {
  //         return (
  //           <h3>
  //             {inventory[name]} - {inventory[amt]}
  //           </h3>
  //         );
  //       }
  //     }
  //   };

  dateConverter = (date) => {
    let dateArray = date.split("-");
    let finalDate = dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0];
    return finalDate;
  };

  timeConverter = (time) => {
    let timeArray = time.split(":");
    if (timeArray[0] > 12) {
      timeArray[0] -= 12;
      return timeArray.join(":") + " PM";
    } else {
      return timeArray.join(":") + " AM";
    }
  };

  render() {
    return (
      <div>
        <table className="login-form">
          <tr>
            <td>
              <label for="moving-destination">Moving Destination</label>
            </td>
            <td>
              <h3>{this.props.dest.location}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <label for="moving-date">Move Date</label>
            </td>
            <td>
              <h4>{this.dateConverter(this.props.dest.date)}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <label for="moving-time">Move Time</label>
            </td>
            <td>
              <h4>{this.timeConverter(this.props.dest.time)}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <label for="moving-price">Move Total Price</label>
            </td>
            <td>
              <h4>${this.props.dest.total_price}</h4>
            </td>
          </tr>
        </table>
        <h4>
          <button className="submit-btn" onClick={this.localDeleteHandler}>
            Delete Move Request
          </button>
        </h4>
        {/* <button onClick={this.displayHandler}>See Moving Inventory</button>
        <div id="inventory">
          <h2>Inventory List</h2>
          {this.iterateInventoryNames()} */}
      </div>
    );
  }
}

export default AptInfo;
