import React from "react";

let mountainCollective = [
  "Aspen",
  "Snowbird",
  "Alta",
  "Banff Sunshine",
  "Big Sky Resort",
  "Jackson Hole Mountain Resort",
];
let ikon = ["Snowbird", "Alta", "Big Bear Mountain Resort", "Mt. Bachelor"];
let epic = ["Telluride", "Sun Valley", "Snowbasin", "Vail", "Heavenly"];
class PassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      loading: true,
    };
  }
  render() {
    console.log(this.props);
    return <div>map resort card here</div>;
  }
}

export default PassPage;
