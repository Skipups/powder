import React from "react";
import axios from "axios";

class FlightPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      loading: true,
      closestAirCode: "SLC",
      departingDate: "2020-06-26",
      departingAirCode: "JFK",
      flightInfo: {},
    };
  }

  componentDidMount() {
    const { closestAirCode, departingDate, departingAirCode } = this.state;
    let flightInfo = {};
    axios
      .post(`/api/flightRequest`, {
        closestAirCode: closestAirCode,
        departingDate: departingDate,
        departingAirCode: departingAirCode,
      })
      .then((res) => {
        flightInfo = res.data;
        this.setState({ rflightInfo: flightInfo, loading: false });
        console.log(this.state.flightInfo, this.state.loading);
      })
      .catch((e) => {
        console.error(e);
      });
  }
  render() {
    return (
      <div>
        <pre>
          <code>{JSON.stringify(this.state.flightInfo.quotes, null, 4)}</code>
        </pre>
        flightPage
      </div>
    );
  }
}

export default FlightPage;
