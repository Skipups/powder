import React from "react";

class OriginAirportForm extends React.Component {
  state = {
    value: "",
    valueError: "Not a valid Airport Code",
  };

  handleChange = (event) => {
    console.log("event", event);
    console.log(event.target.value);
    this.setState({ [event.target.value]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Origin AirportCode:</label>
        <div>
          <input
            name="value"
            value={this.state.value}
            placeholder="Airport code"
            onChange={() => this.handleChange}
          />
        </div>
        <div style={{ color: "red" }}>{this.state.valueError}</div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default OriginAirportForm;

// stopped at trying to pa
