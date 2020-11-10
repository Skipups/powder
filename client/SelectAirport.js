import React from "react";

class SelectAirport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      locationInput: "Seattle",
    };
  }

  componentDidMount() {
    this.fetchAirports();
  }

  fetchAirports() {
    let response = [];
    fetch(
      `https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=Seattle`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "db84276602msh53492662015ad74p1eec6ejsn4e1c50f0e943",
        },
      }
    )
      .then((response) => {
        responseArray = response;
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ response });
  }
  render() {
    if (response.length === 0) {
      return <div>no near by airport</div>;
    } else {
      this.state.response.map();
      return (
        <div>
          <label htmlFor="airport codes">
            SelectAirport
            <input id="airportCodes"></input>
          </label>
        </div>
      );
    }
  }
}

export default SelectAirport;
