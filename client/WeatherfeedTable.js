import React from "react";
import ReactTable from "react-table";

const WeatherfeedTable = (props) => {
  const { forecast } = props;
  console.log(props);

  //helper function to set correct start of day of week
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const firstDayofForecast = forecast[0].time.split(" ")[0];
  let startIndex = weekDays.indexOf(firstDayofForecast);

  let sortedWeekDays = [];

  for (let i = startIndex; i < weekDays.length; i++) {
    if (sortedWeekDays.length < 6) {
      sortedWeekDays.push(weekDays[i]);
    }
  }
  let listOfTime = forecast.map((_forecast) => _forecast.time.split(" ")[1]);
  console.log(listOfTime);

  //helper to get date of request and next 6 days
  let todaysDate = forecast[0].date.split(" ")[2];

  let datesToDisplay = [todaysDate];
  while (datesToDisplay.length < 6) {
    todaysDate = 1 + Number(todaysDate);
    datesToDisplay.push(todaysDate);
  }

  return (
    <div>
      <table className="weatherfeed-table">
        <thead>
          <tr>
            <td>
              <div className="weatherfeed-table-days-container">
                {sortedWeekDays.map((day) => (
                  <div class="weatherfeed-table-days__name">{day}</div>
                ))}

                {datesToDisplay.map((date) => (
                  <div className="weatherfeed-table-days__date">{date} </div>
                ))}
              </div>
            </td>
          </tr>
        </thead>
        <thead>
          <tr>
            {listOfTime.map((_time, index) => (
              <th key={`${_time}+${index}`}>{_time}</th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default WeatherfeedTable;
