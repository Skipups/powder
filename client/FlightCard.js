import React from "react";

const FlightCard = (props) => {
  const timeConverter = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000);
    const hour = a.getHours();
    const min = a.getMinutes();
    const time = hour + ":" + min;
    let timeValue;

    if (hour > 0 && hour <= 12) {
      timeValue = "" + hour;
    } else if (hour > 12) {
      timeValue = "" + (hour - 12);
    } else if (hour == 0) {
      timeValue = "12";
    }

    timeValue += min < 10 ? ":0" + min : ":" + min; // get minutes
    timeValue += hour >= 12 ? " P.M." : " A.M."; // get AM/PM
    return timeValue;
  };

  const airlineConverter = (IATA_code) => {
    const airlineCodePairs = {
      B6: "JetBlue",
      DL: "Delta",
      F9: "Frontier",
      AS: "Alaska",
      WN: "Southwest",
      UA: "United",
    };
    return airlineCodePairs[IATA_code]
      ? airlineCodePairs[IATA_code]
      : IATA_code;
  };

  const departureTime = timeConverter(props.flight.dTime);
  const arrivalTime = timeConverter(props.flight.aTime);
  const price = props.flight.price;
  const airline = airlineConverter(props.flight.airlines);
  const routeNum = props.flight.route[0].flight_no;
  const seats = props.flight.availability.seats;

  return (
    <div>
      <div className="flightresults-container card">
        <div className="imagenum">
          <div className="airline">{airline}</div>
          <div className="flightnum">fl#: {routeNum}</div>
        </div>
        <div className="time">
          <div>
            {" "}
            <span>{departureTime}</span> - <span>{arrivalTime}</span>
          </div>
        </div>
        <div className="priceseats">
          <div> ${price}</div>
          <div> seats: {seats}</div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
