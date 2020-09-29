import React from "react";

class NewMoveForm extends React.Component {
  state = {
    location: "",
    date: "",
    time: "",
    inventory: {
      sofa: 0,
      bed: 0,
      desk: 0,
      table: 0,
      chair: 0,
      boxes: 0,
      appliances: 0,
      plants: 0,
      art: 0,
    },
  };

  updateCount = (e) => {
    console.log(e);
    let item = e.target.name;
    this.setState(() => ({ [item]: e.target.value }));
  };

  incrementItem = (e) => {
    e.persist();
    let item = e.target.name;
    console.log(e.target.name);
    this.setState(() => ({ [item]: this.state.inventory.item + 1 }));
  };
  decrementItem = (e) => {
    e.persist();
    let item = e.target.name;
    console.log(e.target.name);
    this.setState(() => ({ [item]: this.state.inventory.item - 1 }));
  };

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  localSubmitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState = {
      [e.target.name]: "",
    };
  };

  onChangeHandler = (e) => {
    this.onChangeHandler = this.onChangeHandler.bind(this);
    e.persist();
    this.setState({
      [e.target.name]: e.target.value,
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
          {Object.keys(inventory).map((inv) => {
            return (
              <div>
                <span>{inv}</span> -
                <span>
                  <input
                    type="number"
                    name={inv}
                    value={this.state.inventory.inv}
                    onChange={this.onChangeHandler}
                  />
                </span>
              </div>
            );
          })}

          <button type="submit">Submit Move Request</button>
        </form>
      </div>
    );
  }
}

export default NewMoveForm;
