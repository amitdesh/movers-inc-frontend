import React from "react";

class NewMoveForm extends React.Component {
  state = {
    location: "",
    inventory: "",
    date: "",
    time: "",
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

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Schedule a New Move</h1>
        <form onSubmit={this.localSubmitHandler}>
          <label for="destination">Moving Destination</label>
          <input
            type="text"
            name="destination"
            required
            placeholder="Enter Destination"
            value={this.state.destination}
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
            max="17:00"
            step="1800"
            required
            name="time"
            placeholder="Enter desired time slot"
            value={this.state.time}
            onChange={this.onChangeHandler}
          />
          <button type="submit">Submit Move Request</button>
        </form>
      </div>
    );
  }
}

export default NewMoveForm;
