import React from "react";
import axios from "axios";
import WeatherfeedTable from "./WeatherfeedTable";
import snowRequest from "snow-forecast-sfr";

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

    return <div>hi</div>;
  }
}

export default ResortCard;
