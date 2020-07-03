import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@reach/router";
import OriginAirportForm from "./OriginAirportForm";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { origin: "" };
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(input) {
    console.log("input", input);
    this.setState({ origin: input });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Link to="/">Choose a Pass</Link>
        <OriginAirportForm onChange={this.changeHandler} />
      </div>
    );
  }
}
export default Nav;
