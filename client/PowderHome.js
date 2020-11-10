import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

class PowderHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passes: [],
      loading: true,
    };
  }
  componentDidMount() {
    let passes = [];

    axios
      .get("api/passes")
      .then((res) => {
        passes = res.data;
        this.setState({ passes: passes, loading: false });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>loading passes...</h1>;
    }
    return (
      <div className="wrapper">
        <div className="pass-image-container">
          {this.state.passes.map((_pass) => {
            let nameJoined = _pass.name.replace(/\s+/g, "");

            return (
              <div className="pass-image-container-pass" key={_pass.id}>
                {" "}
                <Link to={`/pass/${nameJoined}`}>
                  <img
                    src={_pass.image}
                    alt={_pass.name}
                    data-passname={_pass.name}
                    data-id={_pass.id}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PowderHome;
