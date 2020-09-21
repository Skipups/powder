import React from "react";
import DayCard from "./DayCard";

const WeatherfeedTable = ({ resortName, resortForecast, closestAirCode }) => {
  return (
    <div className="weatherfeed-table-container">
      {resortForecast.map((dayForecast) =>
        //changed code  dayForecast.length >= 1
        dayForecast.length === 3 ? (
          <div className="dayCard">
            <DayCard
              dayForecast={dayForecast}
              resortName={resortName}
              closestAirCode={closestAirCode}
            />
          </div>
        ) : null
      )}
    </div>
  );
};

export default WeatherfeedTable;
