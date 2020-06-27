import React from "react";
import axios from "axios";
import FlightCard from "./FlightCard";

class FlightPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      loading: true,
      closestAirCode: "SLC",
      departingDate: "2020-06-27",
      departingAirCode: "JFK",
      flightInfo: {},
    };
  }

  componentDidMount() {
    const { closestAirCode, departingDate, departingAirCode } = this.state;
    let flightInfo = {};

    axios({
      method: "GET",
      url:
        "https://api.skypicker.com/flights?flyFrom=JFK&to=SLC&dateFrom=29/06/2020&partner=picky&v=3&curr=USD&max_stopovers=0",
    })
      .then((response) => {
        flightInfo = response.data;
        this.setState({ flightInfo: flightInfo, loading: false });
        console.log(this.state.flightInfo.data, this.state.loading);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { loading, flightInfo } = this.state;
    const flightsArray = flightInfo.data;

    if (loading) {
      return <div>searching for a flight ...</div>;
    }

    return (
      <div>
        {flightsArray.map((flight) => (
          <FlightCard flight={flight} />
        ))}
      </div>
    );
  }
}

export default FlightPage;
