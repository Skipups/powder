import React from "react";
import axios from "axios";
import SnowRequest from "snow-forecast-sfr";

class ResortCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resortInfo: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { resortName } = this.props;
    let resort;

    axios
      .post(`/api/snowRequest`, { resortName: resortName })
      .then((res) => {
        resort = res.data;
        this.setState({ resortInfo: resort, loading: false });
        console.log(this.state.resortInfo, this.state.loading);
      })
      .catch((e) => {
        console.error(e);
      });
  }
  render() {
    const { loading, resortInfo } = this.state;
    if (loading) {
      return <div>searching for a storm...</div>;
    }

    return <div>{resortInfo.name}</div>;
  }
}

export default ResortCard;
