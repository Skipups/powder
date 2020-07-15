import React from "react";

class OriginAirportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange(event) {
  //   console.log("event", event);
  //   this.setState({ value: event.target.value }, () => {
  //     if (this.props.onChange) {
  //       this.props.onChange(this.state.value);
  //     }
  //   });
  // }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Origin AirportCode:
          <input
            type="text"
            value={this.state.value}
            placeholder="SEA"
            onChange={this.props.changeHandler}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default OriginAirportForm;

// stopped at trying to pa