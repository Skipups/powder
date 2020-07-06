import React from "react";
import ReactTable from "react-table";
import { Link } from "@reach/router";
import { render } from "react-dom";
import DayCard from "./DayCard";

//need to move to utils folder?

const WeatherfeedTable = ({ resortName, resortForecast }) => {
  return (
    <div>
      <table className="weatherfeed-table">
        {resortForecast.map((dayForecast) =>
          dayForecast.length >= 1 ? (
            <DayCard dayForecast={dayForecast} resortName={resortName} />
          ) : (
            <div></div>
          )
        )}
      </table>
    </div>
  );
};

//   render() {
//     const { forecast, resortName } = this.props;
//     const { selectedDate, selectedResort } = this.state;
//     console.log("forecast", forecast);

//     //make a day card.

//     // group forcast days and map over that

//     //helper function to set correct start of day of week
//     let weekDays = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];

//     const firstDayofForecast = forecast[0].time.split(" ")[0];
//     let startIndex = weekDays.indexOf(firstDayofForecast);

//     let sortedWeekDays = [];

//     for (let i = startIndex; i < weekDays.length; i++) {
//       if (sortedWeekDays.length < 6) {
//         sortedWeekDays.push(weekDays[i]);
//       }
//     }
//     let listOfTime = forecast.map((_forecast) => _forecast.time.split(" ")[1]);

//     //helper to get date of request and next 6 days
//     let todaysDate = forecast[0].date.split(" ")[2];

//     let datesToDisplay = [todaysDate];
//     while (datesToDisplay.length < 6) {
//       todaysDate = 1 + Number(todaysDate);
//       datesToDisplay.push(todaysDate);
//     }

//     let flightIconArray = [];

//     for (let i = 0; i < weekDays.length; i++) {
//       if (flightIconArray.length < 6) {
//         flightIconArray.push(<span class="flightIcon">✈️</span>);
//       }
//     }
//     return (
//       <div>
//         <table className="weatherfeed-table">
//           <thead>
//             <tr className="weatherfeed-tr">
//               <div className="weatherfeed-table-days-container">
//                 <td className="weatherfeed-table-days-td">
//                   {sortedWeekDays.map((day) => (
//                     <div class="weatherfeed-table-days-div-name">{day}</div>
//                   ))}
//                 </td>
//                 <td className="weatherfeed-table-days-td">
//                   {datesToDisplay.map((date) => (
//                     <div className="weatherfeed-table-days-div-date">
//                       {date}{" "}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="weatherfeed-table-days-td">
//                   {listOfTime.map((_time, index) => (
//                     <div key={`${_time}+${index}`}>{_time}</div>
//                   ))}
//                 </td>
//                 <td className="weatherfeed-table-days-td">
//                   {forecast.map((_forecast, index) => (
//                     <div key={`${_forecast.wind}+${index}`}>
//                       {_forecast.wind}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="weatherfeed-table-days-td">
//                   {forecast.map((_forecast, index) => (
//                     <div key={`${_forecast.summary}+${index}`}>
//                       {_forecast.summary}
//                     </div>
//                   ))}
//                 </td>
//               </div>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td className="weatherfeed-table-days-td">
//                 {forecast.map((_forecast, index) => (
//                   <div key={`${_forecast.snow}+${index}`}>{_forecast.snow}</div>
//                 ))}
//               </td>
//               <td className="weatherfeed-table-days-td">
//                 {forecast.map((_forecast, index) => (
//                   <div key={`${_forecast.rain}+${index}`}>{_forecast.rain}</div>
//                 ))}
//               </td>
//               <td className="weatherfeed-table-days-td">
//                 {forecast.map((_forecast, index) => (
//                   <div key={`${_forecast.maxTemp}+${index}`}>
//                     {_forecast.maxTemp}
//                   </div>
//                 ))}
//               </td>
//             </tr>
//           </tbody>
//           <tfoot>
//             <tr className="weatherfeed-tr">
//               <div className="weatherfeed-table-days-container">
//                 <th className="weatherfeed-table-flightLink-td">
//                   {flightIconArray.map((icon) => (
//                     <Link
//                       to="/flightDestination"
//                       // state: {
//                       //   resortName: resortName,
//                       // },
//                     >
//                       {icon}
//                     </Link>
//                   ))}
//                 </th>
//               </div>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     );
//   }
// }
export default WeatherfeedTable;

//  <Link to=`/flightDesination/${resortName}`> why doesn't this work
// why isn't passing state in link workking?
//@russell
