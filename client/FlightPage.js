import React from "react";
import axios from "axios";
import FlightCard from "./FlightCard";
import { Consumer } from "./OriginAirSearchContext";

class FlightPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      loading: true,
      closestAirCode: props.location.state.closestAirCode,
      resortName: props.location.state.resortName,
      departingDate: props.location.state.date,
      airport: props.ariport,
      flightInfo: [],
    };
  }
  //making api request for flight info
  //why am I not getting a 2nd api request when i submit a new airport code??
  componentDidMount() {
    const { closestAirCode, departingDate } = this.state;
    const { airport } = this.props;
    let value = this.context;
    console.log("value", value); // this doesn't get called again!! Only after the initial render
    console.log("new airport", this.props.airport);
    let flightInfo = {};
    let withSeats = []; // array of unique flights and available seats
    let uniqueFlights = [];
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
  render() {
    const { loading, flightInfo } = this.state;
    const { airport } = this.props;

    if (loading) {
      return <div>searching for a flight ...</div>;
    }

    return (
      <div>
        <div>
          {`Departure Date: ${this.state.departingDate}, Orgin Airport: ${airport}, Destination Airport: ${this.state.closestAirCode}`}
        </div>
        <div>
          {flightInfo.map((flight) => (
            <FlightCard flight={flight} />
          ))}
        </div>
      </div>
    );
  }
}

export default (props) => (
  <Consumer>
    {({ airport }) => {
      console.log("prrrrops", props, airport);
      return <FlightPage {...props} airport={airport} />;
    }}
  </Consumer>
);

//practice redue method
// add sort on price, arrival, take off
