import React from "react";
import { Link } from "@reach/router";
import { cleanedResortString, cleanedDepartureDate } from "../Utils.js";
import { Consumer } from "./OriginAirSearchContext";

class DayCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dayForecast, resortName, closestAirCode } = this.props;
    const cleanedResortName = cleanedResortString(resortName);
    const cleaneddepartureDate =
      dayForecast[0].date !== undefined
        ? cleanedDepartureDate(dayForecast[0].date)
        : "";
    if (dayForecast.length === 3) {
      return (
        <Consumer>
          {(context) => (
            <div>
              <div className="c1-3r-container">
                <div className="dayCard-heading-row">
                  {/* weekday */}
                  <div className="row-1col">
                    <div className="weekday">
                      {" "}
                      {dayForecast[0].time.split(" ")[0]}
                    </div>
                  </div>
                </div>
                <div className="dayCard-heading-row">
                  {/* date */}
                  <div className="row-1col">
                    <div className="date">
                      {dayForecast[0].date.split(" ")[2]}
                    </div>
                  </div>
                </div>
                <div className="dayCard-heading-row">
                  {/* night, AM, PM */}
                  {dayForecast.map((dataPoint) => (
                    <div className="row-3col">
                      <div className="nightAMPM" key={dataPoint.time}>
                        {dataPoint.time.split(" ")[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="c1-1r-container"></div>
              <div className="c1-5r-container">
                <div className="dayCard-body-row">
                  {/* mph */}
                  {dayForecast.map((dataPoint) => (
                    <div className="row-3col">
                      <div key={dataPoint.time}>{dataPoint.wind}</div>
                    </div>
                  ))}
                </div>
                <div className="dayCard-body-row">
                  {dayForecast.map((dataPoint) => (
                    <div className="row-3col">
                      <div key={dataPoint.time}>{dataPoint.rain}</div>
                    </div>
                  ))}
                </div>
                <div className="dayCard-body-row">
                  {dayForecast.map((dataPoint) => (
                    <div className="row-3col">
                      <div key={dataPoint.time}>{dataPoint.snow}</div>
                    </div>
                  ))}
                </div>
                <div className="dayCard-body-row">
                  {dayForecast.map((dataPoint) => (
                    <div className="row-3col">
                      <div key={dataPoint.time}>{dataPoint.maxTemp}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="c1-1r-container">
                <div className="flightIcon-row">
                  <div className="row-1col">
                    {context.airport !== closestAirCode ? (
                      <Link
                        className="flightIcon"
                        to={`/flightDestination/${cleanedResortName}`}
                        state={{
                          date: `${cleaneddepartureDate}`,
                          originAirport: `${context.airport}`,
                          resortName: `${resortName}`,
                          closestAirCode: `${closestAirCode}`,
                        }}
                      >
                        ✈️
                      </Link>
                    ) : (
                      <div>🛑</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Consumer>
      );
    } else return <div></div>;
  }
}

export default DayCard;
