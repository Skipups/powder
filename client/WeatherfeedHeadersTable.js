import React from "react";

const WeatherfeedHeadersTable = () => {
  return (
    <div>
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
      <div className="c1-1r-container"></div>
      {/* <--bottom half of header--> */}
      <div class="c1-5r-container">
        <div class="r1-container">
          <div class="mph">mph</div>
        </div>
        <div class="r1-container">
          <div class="snow">snow-in</div>
        </div>
        <div class="r1-container">
          <div class="rain">rain-in</div>
        </div>
        <div class="r1-container">
          <div class="temp">max-F</div>
        </div>
      </div>
      <div className="c1-1r-container"></div>
    </div>
  );
};

export default WeatherfeedHeadersTable;
