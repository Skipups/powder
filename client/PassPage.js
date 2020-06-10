import React from "react";
import ResortCard from "./ResortCard";

let resortsSortedByPass = {
  mountaincollective: [
    "Aspen",
    "Snowbird",
    "Alta",
    "Banff Sunshine",
    "Big Sky Resort",
    "Jackson Hole Mountain Resort",
  ],
  ikon: ["Snowbird", "Alta", "Big Bear Mountain Resort", "Mt. Bachelor"],
  epic: ["Telluride", "Sun Valley", "Snowbasin", "Vail", "Heavenly"],
};

class PassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      loading: true,
    };
  }
  render() {
    let selectedPassName = this.props.name.toLowerCase();
    console.log(selectedPassName);
    return resortsSortedByPass[selectedPassName].map((resort) => {
      return <ResortCard resortName={resort} />;
    });
  }
}

export default PassPage;
