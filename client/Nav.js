import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@reach/router";

import OriginAirportForm from "./OriginAirportForm.js";

class Nav extends React.Component {
  render() {
    return (
      <div className="card nav">
        <div className="navform">
          <OriginAirportForm />
        </div>
        <div className="navlink">
          <Link className="navlink" to="/">
            Choose a Pass
          </Link>
        </div>
      </div>
    );
  }
}
export default Nav;

{
  /*  */
}
