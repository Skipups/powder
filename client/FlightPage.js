import React from "react";
import axios from "axios";
import FlightCard from "./FlightCard";
import { Consumer } from "./OriginAirSearchContext";

class FlightPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      closestAirCode: props.location.state.closestAirCode,
      resortName: props.location.state.resortName,
      departingDate: props.location.state.date,
      airport: props.airport,
      flightInfo: [],
    };
    this.flightRequestFunction = this.flightRequestFunction.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.airport !== prevProps.airport) {
      this.flightRequestFunction();
    }
  }

  flightRequestFunction() {
    let flightInfo = {};
    let withSeats = []; // array of unique flights and available seats
    let uniqueFlights = [];
    const { closestAirCode, departingDate } = this.state;
    const { airport } = this.props;

    axios({
      method: "GET",
      url: `https://api.skypicker.com/flights?flyFrom=${airport}&to=${closestAirCode}&dateFrom=${departingDate}&partner=picky&v=3&curr=USD&max_stopovers=0`,
    })
      .then((response) => {
        flightInfo = response.data;
        //filter data to only save flights with seats and unique flight numbers
        withSeats = flightInfo.data.filter(
          (flight) => flight.availability.seats > 0
        );
        uniqueFlights = withSeats.reduce((acc, current) => {
          const x = acc.find(
            (item) => item.route[0].flight_no === current.route[0].flight_no
          );
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);

        this.setState({ flightInfo: uniqueFlights, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  checkValid(airport, flightInfo, closestAirCode) {
    if (airport.length === 0) {
      return (
        <div class="warning">Enter Origin Airportcode to Diplay Flights </div>
      );
    } else if (airport === closestAirCode) {
      return (
        <div class="warning">
          Origin and Destination Airportcode must be different{" "}
        </div>
      );
    } else if (flightInfo.length === 0) {
      return <div>No direct flights available</div>;
    } else {
      return flightInfo.map((flight) => <FlightCard flight={flight} />);
    }
  }

  componentDidMount() {
    this.flightRequestFunction();
  }

  render() {
    const { loading, flightInfo, closestAirCode } = this.state;
    const { airport } = this.props;

    if (loading) {
      return <div>searching for a flight ...</div>;
    }

    return (
      <div>
        <div className="flightresults-container">
          <div className="flightinfobar">
            <div>{`Departure Date: ${this.state.departingDate}`}</div>
            <div>{`Orgin Airport: ${airport}`}</div>
            <div>✈</div>
            <div>{`Destination Airport: ${this.state.closestAirCode}`}</div>
          </div>
          <div>
            <div>{this.checkValid(airport, flightInfo, closestAirCode)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default (props) => (
  <Consumer>
    {({ airport }) => {
      return <FlightPage {...props} airport={airport} />;
    }}
  </Consumer>
);
