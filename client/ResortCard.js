import React from "react";
import axios from "axios";
import SnowRequest from "snow-forecast-sfr";

class ResortCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      loading: true,
    };
  }
  componentDidMount() {
    const { resortName } = this.props;
    let weather = [];
    //make api request
    axios
      .get("/api/snowRequest", { params: { resortName } })
      .then((res) => {
        console.log("snow request res", res);
        weather = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
    this.setState({ weather: weather, loading: false });
  }
  render() {
    if (this.state.loading) {
      return <div>searching for a storm...</div>;
    }

    return (
      <div>
        <pre>
          <code>{JSON.stringify(this.state.weather, null, 2)}</code>
        </pre>
      </div>
    );
  }
}

export default ResortCard;
