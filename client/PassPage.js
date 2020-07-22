import React from "react";
import ResortCard from "./ResortCard";
import axios from "axios";

// let resortsSortedByPass = {
//   mountaincollective: [
//     "Aspen",
//     "Snowbird",
//     "Alta",
//     "Banff Sunshine",
//     "Big Sky Resort",
//     "Jackson Hole Mountain Resort",
//   ],
//   ikon: ["Snowbird", "Alta", "Big Bear Mountain", "Mt. Bachelor"],
//   epic: ["Telluride"],
// };

//make api call to db to all resorts belonging to selected pass  from props
class PassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participatingResorts: [],
      loading: true,
    };
  }

  componentDidMount() {
    let selectedPass = this.props.name;
    let participatingResorts = [];
    axios
      .get(`/api/passes/${selectedPass}`)
      .then((response) => {
        let passWithResorts = response.data;
        participatingResorts = passWithResorts.resorts;
        this.setState({
          participatingResorts: participatingResorts,
          loading: false,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }
  render() {
    let selectedPassName = this.props.name.toLowerCase();
    if (this.state.loading) {
      return <div>finding participating resorts... elevator music</div>;
    } else {
      return this.state.participatingResorts.map((resort) => {
        return <ResortCard resort={resort} />;
      });
    }
  }
}

export default PassPage;
