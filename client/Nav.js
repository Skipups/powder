import React from "react";
import { Link } from "@reach/router";

import OriginAirportForm from "./OriginAirportForm.js";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="navform">
          <OriginAirportForm />
        </div>
        <div className="navlink">
          <Link className="navlink" to="/">
            Choose a different Pass
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
