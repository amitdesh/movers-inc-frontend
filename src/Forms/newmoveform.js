import React from "react";
import "./newmoveform.css";

class NewMoveForm extends React.Component {
  state = {
    location: "",
    date: "",
    time: "",
    inventory: [],
  };

  componentDidMount() {
    let options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${this.props.profileData.jwt}`,
      },
    };
    fetch("http://localhost:3000/inventories", options)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState(
          () => ({
            inventory: data,
          }),
          () => console.log(this.state)
        );
      });
  }

  localSubmitHandler = (e) => {
    e.preventDefault();
    e.persist();
    const requestBody = [
      {
        destination: {
          location: e.target[0].value,
          date: e.target[1].value,
          time: e.target[2].value,
          user_id: this.props.profileData.user.id,
        },
      },
      {
        invent: {
          8: e.target[3].value,
          9: e.target[4].value,
          10: e.target[5].value,
          11: e.target[6].value,
          12: e.target[7].value,
          13: e.target[8].value,
          14: e.target[9].value,
          15: e.target[10].value,
        },
      },
    ];
    // debugger;
    this.props.submitHandler(requestBody);
    e.target.reset();
    this.setState({
      [e.target[0].name]: "",
      [e.target[1].name]: "",
      [e.target[2].name]: "",
    });
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  renderInventory = () => {
    return this.state.inventory.map((inv) => {
      return (
        <table className="inventory-table">
          <tr>
            <td>
              <span>
                <label for="inventory-name">{inv.name}</label>
              </span>
            </td>
            <td>
              <span>
                <label for="inventory-price">${inv.price}/item</label>
              </span>
            </td>
            <td>
              <span>
                <input type="number" name={inv.name} id={inv.id} />
              </span>
            </td>
          </tr>
        </table>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>New Move Form</h1>
        <h3>Destination Details</h3>
        <form onSubmit={this.localSubmitHandler}>
          <table className="destination-table">
            <tr>
              <td>
                <span>
                  <label for="destination">Moving Destination</label>
                </span>
              </td>
              <td>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Enter Destination"
                  value={this.state.location}
                  onChange={this.onChangeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <br></br>
                  <label for="date">Moving Date</label>
                </span>
              </td>
              <td>
                <input
                  type="date"
                  name="date"
                  required
                  placeholder="Enter desired date of move"
                  value={this.state.date}
                  onChange={this.onChangeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <br></br>
                  <label for="time">Moving Time</label>
                </span>
              </td>
              <td>
                <input
                  type="time"
                  min="08:00"
                  max="18:00"
                  step="600"
                  required
                  name="time"
                  placeholder="Enter desired time slot"
                  value={this.state.time}
                  onChange={this.onChangeHandler}
                />
                <br></br>
              </td>
            </tr>
            <h3>Moving Inventory</h3>
            <table className="inventory-table">
              <th>
                <h3>Item</h3>
              </th>
              <th>
                <h3>Price</h3>
              </th>
              <th>
                <h3>Quantity</h3>
              </th>
            </table>
            {this.renderInventory()}
            <tr>
              <td>
                <button className="submit-btn" type="submit">
                  Submit Move Request
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default NewMoveForm;
