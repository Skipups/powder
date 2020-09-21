import React from "react";
import ReactTable from "react-table";

const WeatherfeedHeadersTable = (props) => {
  const { forecast } = props;

  return (
    <div>
      {/* <div className="weatherfeedheaders-table">
      
          <tr className="weatherfeed-tr">
            <div className="weatherfeed-table-days-container"></div>
          </tr> */}

      <div class="c1-3r-container">
        <div class="r1-container">
          <div class="day">day</div>
        </div>
        <div class="r1-container">
          <div class="date">date</div>
        </div>
        <div class="r1-container">
          <div class="time">time</div>
        </div>
      </div>
      {/* <--bottom half of header--> */}
      <div class="c1-5r-container">
        <div class="r1-container"></div>
        <div class="r1-container">
          <div class="summary">summary</div>
        </div>
        <div class="r1-container">
          <div class="snow">snow in</div>
        </div>
        <div class="r1-container">
          <div class="rain">rain in</div>
        </div>
        <div class="r1-container">
          <div class="temp">max f</div>
        </div>
      </div>
      <div className="c1-1r-container"></div>
    </div>
  );
};

export default WeatherfeedHeadersTable;
