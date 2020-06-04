import React from "react";
import SnowRequest from "snow-forecast-sfr";
import { thistle } from "color-name";

//list of all epic resorts
// list mount

let ikonResorts = [
  "Snowbird",
  "Alta",
  "Aspen Snowmass",
  "Steamboat",
  "Winter Park Resort",
];

// a callback where you specify what to do with the returned object
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
    };
  }
  componentDidMount() {
    console.log(SnowRequest);
    const snow = SnowRequest.default;
    let weather = [];
    const { fetch } = window;
    fetch("/api/snowRequest")
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        console.log("response = ", d);
      })
      .catch((e) => {
        console.log("e ", e);
      });
    // snow.parseResort(
    //   "Snowbird",
    //   "mid",
    //   function (result) {
    //     console.log(result);
    //     return weather.concat(result);
    //   },
    //   {
    //     inMetric: false,
    //   }
    // );
    this.setState({ weather });
  }
  render() {
    ikonResorts.map((_r) => <ResortCard />);
    return (
      <div>
        <h1>Weather!</h1>
        <pre>
          <code>{JSON.stringify(this.state, null, 2)}</code>
        </pre>
      </div>
    );
  }
}
//array of resort names as on snow-forecast, pass each one in at a time. save each
//json data in an array of return data and then display it

export default Weather;
