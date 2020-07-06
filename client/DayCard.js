import React from "react";
import { Link } from "@reach/router";
import { cleanedResortString, cleanedDepartureDate } from "../Utils.js";

const DayCard = ({ dayForecast, resortName }) => {
  console.log("dayforecast", dayForecast);
  const cleanedResortName = cleanedResortString(resortName);
  const cleaneddepartureDate =
    dayForecast[0].date !== undefined
      ? cleanedDepartureDate(dayForecast[0].date)
      : "";

  // sometimes a dayForecast only has length 1 or 0
  if (dayForecast.length >= 1) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td> {dayForecast[0].time.split(" ")[0]}</td>
            </tr>
            <tr>
              <td>{dayForecast[0].date.split(" ")[2]}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {dayForecast.map((dataPoint) => (
                <td key={dataPoint.time}>{dataPoint.time.split(" ")[1]}</td>
              ))}
            </tr>
            <tr>
              {dayForecast.map((dataPoint) => (
                <td key={dataPoint.time}>{dataPoint.wind}</td>
              ))}
            </tr>
            <tr>
              {dayForecast.map((dataPoint) => (
                <td key={dataPoint.time}>{dataPoint.summary}</td>
              ))}
            </tr>
            <tr>
              {dayForecast.map((dataPoint) => (
                <td key={dataPoint.time}>{dataPoint.rain}</td>
              ))}
            </tr>
            <tr>
              {dayForecast.map((dataPoint) => (
                <td key={dataPoint.time}>{dataPoint.snow}</td>
              ))}
            </tr>
            <tr>
              {dayForecast.map((dataPoint) => (
                <td key={dataPoint.time}>{dataPoint.maxTemp}</td>
              ))}
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <Link
                  to={`/flightDestination/${cleanedResortName}`}
                  state={{ date: `${cleaneddepartureDate}` }}
                >
                  ✈️
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  } else return <div></div>;
};

export default DayCard;
// const NewsFeed = () => (
//   <div>
//     <Link to="photos/123" state={{ fromFeed: true }} />
//   </div>
// );

// const Photo = ({ location, photoId }) => {
//   if (location.state.fromFeed) {
//     return <FromFeedPhoto id={photoId} />;
//   } else {
//     return <Photo id={photoId} />;
//   }
// };
