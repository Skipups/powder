import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./OriginAirSearchContext";
import { Router, Link, useNavigate } from "@reach/router";
import PassPage from "./PassPage.js";
import PowderHome from "./PowderHome.js";
import FlightPage from "./FlightPage.js";
import Nav from "./Nav.js";

//only origin is at the root state level. All other choices are lower component level.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originAirport: "JFK",
      airport: "",
      handleOriginAirportChange: this.handleOriginAirportChange,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    };
  }
  handleOriginAirportChange = (e) => {
    const capatilized = e.target.value.toUpperCase();
    this.setState({ originAirport: capatilized });
  };

  handleChange = (event) => {
    const capatilized = event.target.value.toUpperCase();
    this.setState({ airport: capatilized });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submited", this.state.airport);
  };
  render() {
    return (
      <div>
        <Provider value={this.state}>
          <nav>
            <Nav />
          </nav>
          <Router>
            <PowderHome path="/" />
            <PassPage path="/pass/:name" />
            <FlightPage path="/flightDestination/:resortName" />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
// state for the app that different componenets can access.
// provider? React Context?
// need to refactor, and learn.
// Lifting state to a parent comoonenet. LIKE THIS ONE!
// cons - prop drilling, (endless), a huge component this one!
// pros - knows this works
// Redux?

// daycard, needs airport code
// airportcode
