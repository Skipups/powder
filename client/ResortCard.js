import React from "react";
import axios from "axios";
import WeatherfeedTable from "./WeatherfeedTable";
import WeatherfeedHeadersTable from "./WeatherfeedHeadersTable";

class ResortCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resortForecast: [],
      loading: true,
      destinationAirport: "",
    };
  }

  componentDidMount() {
    const resortName = this.props.resort.name;
    let resort;
    let groupedByDayMatrix = [];

    axios
      .post(`/api/snowRequest`, { resortName: resortName })
      .then((res) => {
        resort = res.data;

        groupedByDayMatrix = this.grouped(resort.forecast);

        this.setState({ resortForecast: groupedByDayMatrix, loading: false });
      })
      .catch((e) => {
        console.error(e);
      });
  }
  grouped = (data) => {
    // given 18 forecast objects, this will give those objs grouped by day.
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
    }
    return groupedByDayMatrix;
  };

  render() {
    const { loading, resortForecast } = this.state;
    const { name, closestAirCode } = this.props.resort;

    if (loading) {
      return <div>searching for a storm...</div>;
    }

    return (
      <div className="resortCard-container">
        <div className="brand-container">{name}</div>
        <div className="header-weather-container">
          <div className="header-container">
            <WeatherfeedHeadersTable />
          </div>
          <div className="weather-container">
            <WeatherfeedTable
              resortForecast={resortForecast}
              resortName={name}
              closestAirCode={closestAirCode}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ResortCard;
