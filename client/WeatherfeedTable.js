import React from "react";
import DayCard from "./DayCard";

const WeatherfeedTable = ({ resortName, resortForecast, closestAirCode }) => {
  return (
    <div>
      <table className="weatherfeed-table-container">
        {resortForecast.map((dayForecast) =>
          dayForecast.length >= 1 ? (
            <div className="dayCard-container">
              <DayCard
                dayForecast={dayForecast}
                resortName={resortName}
                closestAirCode={closestAirCode}
              />
            </div>
          ) : (
            <div></div>
          )
        )}
      </table>
    </div>
  );
};

export default WeatherfeedTable;
