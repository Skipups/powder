import React from "react";
import axios from "axios";
import PassPage from "./PassPage";
import { navigate } from "@reach/router";

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
        console.log("res", res);
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
      <div className="pass-image-container">
        {this.state.passes.map((_pass) => {
          return (
            <div className="pass-image-container-pass" key={_pass.id}>
              {" "}
              <Link to={`/pass/${_pass.name}`}>
                <img
                  className={_pass.name === this.state.selected ? "active" : ""}
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
    );
  }
}

export default PowderHome;
