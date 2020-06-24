import React from "react";
import axios from "axios";
import WeatherfeedTable from "./WeatherfeedTable";
import WeatherfeedHeadersTable from "./WeatherfeedHeadersTable";
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
    const { forecast } = resortInfo;
    if (loading) {
      return <div>searching for a storm...</div>;
    }

    return (
      <div className="resortCard-wrapper">
        <div className="resortCard-container">
          <div className="brand-container">{resortInfo.name}</div>
          <div className="weatherfeedHeader-container">
            <WeatherfeedHeadersTable />
          </div>
          <div className="weatherfeed-container">
            <WeatherfeedTable forecast={forecast} />
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
