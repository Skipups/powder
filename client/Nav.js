import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@reach/router";
import OriginAirportForm from "./OriginAirportForm";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.state = { origin: "" };
  }
  handleChange(e) {
    const capatilized = e.target.value.toUpperCase();
    this.setState({ origin: capatilized });
  }
  changeHandler(e) {
    const capatilized = e.target.value.toUpperCase();
    this.setState({ origin: capatilized });
  }

  render() {
    const origin = this.state.origin;
    return (
      <div>
        <Link to="/">Choose a Pass</Link>
        {/* <OriginAirportForm onChange={this.changeHandler} /> */}
        <fieldset>
          <legend>Enter Origin AirportCode:</legend>
          <input value={origin} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}
export default Nav;

{
  /*  */
}
