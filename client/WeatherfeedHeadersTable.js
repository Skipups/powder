import React from "react";
import ReactTable from "react-table";

const WeatherfeedHeadersTable = (props) => {
  const { forecast } = props;

  return (
    <div>
      <table className="weatherfeedheaders-table">
        <thead>
          <tr className="weatherfeed-tr">
            <div className="weatherfeed-table-days-container"></div>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-wind">
                <div class="windu">day</div>
              </div>
            </td>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-wind">
                <div class="windu">date</div>
              </div>
            </td>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-wind">
                <div class="windu">time</div>
              </div>
            </td>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-wind">
                <div class="windu">mph</div>
              </div>
            </td>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-summary">
                <div class="summary">summary</div>
              </div>
            </td>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-summary">
                <div class="snow">snow in</div>
              </div>
            </td>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-summary">
                <div class="rain">rain in</div>
              </div>
            </td>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-summary">
                <div class="temp">max f</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherfeedHeadersTable;
