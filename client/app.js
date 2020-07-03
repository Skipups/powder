import React from "react";
import ReactDOM from "react-dom";
//import Weather from "./Weather";
import { Router, Link, useNavigate } from "@reach/router";
import PassPage from "./PassPage.js";
import PowderHome from "./PowderHome.js";
import FlightPage from "./FlightPage.js";
import Nav from "./Nav.js";

class App extends React.Component {
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
