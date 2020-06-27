import React from "react";

class FlightCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrrivalTime: null,
      departureTime: null,
      airline: this.props.airlines,
      seats: null,
      price: this.props.price,
    };
  }
  componentDidMount() {
    const { arrivalTime, departureTime, airlines, seats, price } = this.props;
    const convertedAirline = this.airlineConverter(airlines);
    this.setState({ airline: convertedAirline, price: price });
  }

  timeConverter = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000);
    const hour = a.getHours();
    const min = a.getMinutes();
    const time = hour + ":" + min;
    console.log("time", time);
    return time;
  };

  airlineConverter = (IATA_code) => {
    const airlineCodePairs = { B6: "JetBlue", DL: "Delta" };
    return airlineCodePairs[IATA_code];
  };

  render() {
    return (
      <div className="resortCard-wrapper">
        <div className="resortCard-container">
          <div>{this.state.airline}</div>
          <div>${this.state.price}</div>
        </div>
      </div>
    );
  }
}

export default FlightCard;

{
  /* <div>departureTime: {convertedDepartureTime}</div>
<div>available seats: {seats}</div> 
   / <div> {this.state.airline} </div>
*/
}
