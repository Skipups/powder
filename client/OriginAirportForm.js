import React from "react";
import { Consumer } from "./OriginAirSearchContext";

class OriginAirportForm extends React.Component {
  render() {
    return (
      <Consumer>
        {(context) => (
          <form onSubmit={context.handleSubmit}>
            <label>Origin AirportCode:</label>
            <div>
              <input
                value={context.airport}
                // placeholder="Airport code"
                onChange={context.handleChange}
              />
            </div>
            {/* <div style={{ color: "red" }}>{this.state.valueError}</div> */}
            <button type="submit">submit</button>
          </form>
        )}
      </Consumer>
    );
  }
}
export default OriginAirportForm;

// stopped at trying to pa
