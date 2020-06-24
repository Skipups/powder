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
          <tr className="weatherfeed-tr">
            <div className="weatherfeed-table-days-container">
              <td class="weatherfeed-table-days-td">
                {sortedWeekDays.map((day) => (
                  <div class="weatherfeed-table-days-div-name">{day}</div>
                ))}
              </td>
              <td class="weatherfeed-table-days-td">
                {datesToDisplay.map((date) => (
                  <div className="weatherfeed-table-days-div-date">{date} </div>
                ))}
              </td>
              <td class="weatherfeed-table-days-td">
                {listOfTime.map((_time, index) => (
                  <div key={`${_time}+${index}`}>{_time}</div>
                ))}
              </td>
              <td class="weatherfeed-table-days-td">
                {forecast.map((_forecast, index) => (
                  <div key={`${_forecast.wind}+${index}`}>{_forecast.wind}</div>
                ))}
              </td>
              <td class="weatherfeed-table-days-td">
                {forecast.map((_forecast, index) => (
                  <div key={`${_forecast.summary}+${index}`}>
                    {_forecast.summary}
                  </div>
                ))}
              </td>
            </div>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="weatherfeed-table-days-td">
              {forecast.map((_forecast, index) => (
                <div key={`${_forecast.snow}+${index}`}>{_forecast.snow}</div>
              ))}
            </td>
            <td class="weatherfeed-table-days-td">
              {forecast.map((_forecast, index) => (
                <div key={`${_forecast.rain}+${index}`}>{_forecast.rain}</div>
              ))}
            </td>
            <td class="weatherfeed-table-days-td">
              {forecast.map((_forecast, index) => (
                <div key={`${_forecast.maxTemp}+${index}`}>
                  {_forecast.maxTemp}
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherfeedTable;
