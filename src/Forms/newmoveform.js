import React from "react";

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
    this.setState = {
      [e.target.name]: "",
    };
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  renderInventory = () => {
    return this.state.inventory.map((inv) => {
      return (
        <div>
          <h3>{inv.name}</h3>
          <h4>{inv.price}</h4>
          <span>
            <input type="number" name={inv.name} id={inv.id} />
          </span>
        </div>
      );
    });
  };

  render() {
    let inventory = this.state.inventory;
    return (
      <div>
        <h1>Schedule a New Move</h1>
        <form onSubmit={this.localSubmitHandler}>
          <label for="destination">Moving Destination</label>
          <input
            type="text"
            name="location"
            required
            placeholder="Enter Destination"
            value={this.state.location}
            onChange={this.onChangeHandler}
          />
          <label for="date">Moving Date</label>
          <input
            type="date"
            name="date"
            required
            placeholder="Enter desired date of move"
            value={this.state.date}
            onChange={this.onChangeHandler}
          />
          <label for="time">Moving Time</label>
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
          <h3>Moving Inventory</h3>
          <div>{this.renderInventory()}</div>
          <button type="submit">Submit Move Request</button>
        </form>
      </div>
    );
  }
}

export default NewMoveForm;
