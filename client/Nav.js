import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@reach/router";
import { Consumer } from "./OriginAirSearchContext";
import OriginAirportForm from "./OriginAirportForm.js";

class Nav extends React.Component {
  render() {
    return (
      <Consumer>
        {(context) => (
          <div>
            <Link to="/">Choose a Pass</Link>
            <fieldset>
              <legend>Enter Origin AirportCode:</legend>
              <input
                value={context.originAirport}
                onChange={context.handleOriginAirportChange}
              />
            </fieldset>
            <OriginAirportForm />
          </div>
        )}
      </Consumer>
    );
  }
}
export default Nav;

{
  /*  */
}
