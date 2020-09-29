import React from "react";

class NewMoveForm extends React.Component {
  state = {
    location: "",
    date: "",
    time: "",
    inventory: {
      sofa: 0,
      bed: 0,
      couch: 0,
      desk: 0,
      table: 0,
      chair: 0,
      boxes: 0,
      appliances: 0,
    },
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
    e.persist();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // displayInventory = () => {
  //   let inventory = this.state.inventory;
  //   for (let name in inventory) {
  //     <li>{inventory[name]}</li>;
  //   }
  // };

  render() {
    console.log(this.state.inventory);
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
          <ul>
            {Object.keys(this.state.inventory).map(function (name) {
              return (
                <li>
                  {name} - <button>-</button>
                  <span>{this.state.inventory.name}</span>
                  <button>+</button>
                </li>
              );
            })}
          </ul>
          <button type="submit">Submit Move Request</button>
        </form>
      </div>
    );
  }
}

export default NewMoveForm;
