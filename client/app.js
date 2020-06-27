import React from "react";
import ReactDOM from "react-dom";
//import Weather from "./Weather";
import { Router, Link, useNavigate } from "@reach/router";
import PassPage from "./PassPage.js";
import PowderHome from "./PowderHome.js";
import FlightPage from "./FlightPage.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Find that Powder!</Link>
        </header>
        <Router>
          <PowderHome path="/" />
          <PassPage path="/pass/:name" />
          <FlightPage path="/flightDestination" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
