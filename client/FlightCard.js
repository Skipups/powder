import React from "react";

const FlightCard = (props) => {
  const timeConverter = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000);
    const hour = a.getHours();
    const min = a.getMinutes();
    const time = hour + ":" + min;

    return time;
  };

  const airlineConverter = (IATA_code) => {
    const airlineCodePairs = { B6: "JetBlue", DL: "Delta" };
    return airlineCodePairs[IATA_code];
  };

  const departureTime = timeConverter(props.flight.dTime);
  const arrivalTime = timeConverter(props.flight.aTime);
  const price = props.flight.price;
  const airline = airlineConverter(props.flight.airlines);
  const routeNum = props.flight.route[0].flight_no;
  const seats = props.flight.availability.seats;

  return (
    <div className="resortCard-wrapper">
      <div className="resortCard-container">
        <div>
          {" "}
          {airline} flight number: {routeNum}
        </div>
        <div> ${price}</div>
        <div> departureTime: {departureTime}</div>
        <div> arrivalTime: {arrivalTime}</div>
        <div> available seats: {seats}</div>
      </div>
    </div>
  );
};

export default FlightCard;

//why is there no this context needed for functions in functional components

// const funcComponent = (props) => {
//   const converter = (num) => num * 100;
//   const price = converter(props.price);
//   return <div>'Hello' {price}</div>;
// };

{
  /* <div>departureTime: {convertedDepartureTime}</div>
<div>available seats: {seats}</div> 
   / <div> {this.state.airline} </div>
*/
}

// function addThenMult({flightInfo}) {
//   let time = makeTimeReadable(flightInfo.time)

//   return JSX that includes time that is readable
//   let added = add(a,b)
//   let multed = mult(a,b)
//   return added + multed;
// }

// function add(a,b) {
//   return a + b;
// }

// function mult(a,b) {
//   return a * b
// }
