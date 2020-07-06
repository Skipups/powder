import React from "react";
import axios from "axios";
import WeatherfeedTable from "./WeatherfeedTable";
import WeatherfeedHeadersTable from "./WeatherfeedHeadersTable";
import snowRequest from "snow-forecast-sfr";

class ResortCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resortForecast: [],
      name: this.props.resortName,
      loading: true,
    };
  }

  componentDidMount() {
    const { resortName } = this.props;
    let resort;
    let groupedByDayMatrix = [];

    axios
      .post(`/api/snowRequest`, { resortName: resortName })
      .then((res) => {
        resort = res.data;

        groupedByDayMatrix = this.grouped(resort.forecast);

        this.setState({ resortForecast: groupedByDayMatrix, loading: false });
        console.log("this.state.resortForecast", this.state.resortForecast);
      })
      .catch((e) => {
        console.error(e);
      });
  }
  grouped = (data) => {
    // given 18 forecast objects, this will give me those objsgrouped by day.
    let i = 0;
    let current = "";
    let previous = "";
    let groupedByDayMatrix = [];

    while (i < 18) {
      for (let row = 0; row < 7; row++) {
        groupedByDayMatrix[row] = [];

        for (let col = 0; col <= 2; col++) {
          if (i === 18) break;
          previous = current;
          current = data[i].date.split(" ")[0];

          if (previous === "" || previous === current || col == 0) {
            groupedByDayMatrix[row][col] = data[i];
            i++;
          } else if (previous !== current) {
            break;
          }
        }
      }
      // check for i!
    }
    return groupedByDayMatrix;
  };

  render() {
    const { loading, resortForecast, name } = this.state;

    if (loading) {
      return <div>searching for a storm...</div>;
    }

    return (
      <div className="resortCard-wrapper">
        <div className="resortCard-container">
          <div className="brand-container">{name}</div>
          <div className="weatherfeedHeader-container">
            <WeatherfeedHeadersTable />
          </div>
          <div className="weatherfeed-container">
            <WeatherfeedTable
              resortForecast={resortForecast}
              resortName={name}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ResortCard;

// <WeatherfeedTable resortInfo={this.state.resortInfo} />
{
  /* <pre>
<code>
  {JSON.stringify(this.state.resortInfo.forecast, null, 4)}
</code>
</pre> */
}

{
  /* <div className="resortCard-wrapper">
        <div className="resortCard-container">
          <div className="brand-container">{name}</div>
          <div className="weatherfeedHeader-container">
            <WeatherfeedHeadersTable />
          </div>
          <div className="weatherfeed-container">
            <WeatherfeedTable forecast={resortForecast} resortName={name} />
          </div>
        </div>
      </div> */
}

//// let i = 0;
// let y = i > 0 ? i - 1 : 0;
// console.log("i,y", i, y);
// let groupedByDayMatrix = [];
// while (i < 18) {
//   for (let row = 0; row < 6; row++) {
//     console.log("groupedByDayMatrix", groupedByDayMatrix);
//     groupedByDayMatrix[row] = [];
//     for (let col = 0; col < 3; col++) {
//       let prev = i > 0 ? data[y].date.split(" ")[0] : 0;
//       let current = data[i].date.split(" ")[0];

//       console.log("prev", prev, "current", current);
//       //set data for new row new column
//       if (prev === 0 || prev === current) {
//         groupedByDayMatrix[row][col] = data[i];
//         i++;
//       }
//     }
//   }
// }

// return groupedByDayMatrix;
// };
