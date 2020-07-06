import React from "react";
import ReactDOM from "react-dom";
//import Weather from "./Weather";
import { Router, Link, useNavigate } from "@reach/router";
import PassPage from "./PassPage.js";
import PowderHome from "./PowderHome.js";
import FlightPage from "./FlightPage.js";
import Nav from "./Nav.js";

class App extends React.Component {
  // state for the app that different componenets can access.
  // provider? React Context?
  // need to refactor, and learn.
  // Lifting state to a parent comoonenet. LIKE THIS ONE!
  // cons - prop drilling, (endless), a huge component this one!
  // pros - knows this works
  // Redux?

  // daycard, needs airport code
  // airportcode
  render() {
    return (
      <div>
        <nav>
          <Nav />
        </nav>
        <Router>
          <PowderHome path="/" />
          <PassPage path="/pass/:name" />
          <FlightPage path="/flightDestination/:resortName" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
