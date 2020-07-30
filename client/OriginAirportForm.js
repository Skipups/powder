import React from "react";
import { Consumer } from "./OriginAirSearchContext";

class OriginAirportForm extends React.Component {
  render() {
    return (
      <Consumer>
        {(context) => (
          <form onSubmit={context.handleSubmit}>
            <label>Input Origin Airportcode:</label>
            <div>
              <input
                value={context.airport}
                placeholder="LGA"
                onChange={context.handleChange}
              />
            </div>
            <div style={{ color: "red" }}>{context.airportError}</div>
            <button type="submit">save</button>
          </form>
        )}
      </Consumer>
    );
  }
}
export default OriginAirportForm;

// stopped at trying to pa
