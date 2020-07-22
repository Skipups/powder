import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@reach/router";

import OriginAirportForm from "./OriginAirportForm.js";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Choose a Pass</Link>

        <OriginAirportForm />
      </div>
    );
  }
}
export default Nav;

{
  /*  */
}
