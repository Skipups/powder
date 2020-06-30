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
      departingDate: "29/06/2020",
      departingAirCode: "JFK",
      flightInfo: [],
    };
  }

  componentDidMount() {
    const { closestAirCode, departingDate, departingAirCode } = this.state;
    let flightInfo = {};
    let withSeats = []; // array of unique flights and available seats
    let uniqueFlights = [];
    axios({
      method: "GET",
      url: `https://api.skypicker.com/flights?flyFrom=${departingAirCode}&to=${closestAirCode}&dateFrom=${departingDate}&partner=picky&v=3&curr=USD&max_stopovers=0`,
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

    if (loading) {
      return <div>searching for a flight ...</div>;
    }

    return (
      <div>
        {flightInfo.map((flight) => (
          <FlightCard flight={flight} />
        ))}
      </div>
    );
  }
}

export default FlightPage;

//practice redue method
// add sort on price, arrival, take off
