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
      airport: "",
      airportError: "",
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      validateLength: this.validateLength,
    };
  }

  handleChange = (event) => {
    const capatilized = event.target.value.toUpperCase();
    this.setState({ airport: capatilized });
  };
  validateLength = () => {
    console.log("vl");
    let airportError = "";
    if (this.state.airport.length !== 3) {
      airportError = "invalid airport code";
      console.log(airportError);
    }
    if (airportError) {
      this.setState({ airportError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateLength();
    if (isValid) {
      console.log("submited", this.state.airport);

      //clear error if aircode valid length
      this.setState({ airportError: "" });
    }
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
