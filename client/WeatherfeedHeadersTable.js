import React from "react";
import ReactTable from "react-table";

const WeatherfeedHeadersTable = (props) => {
  const { forecast } = props;

  return (
    <div>
      <table className="weatherfeed-table">
        <thead>
          <tr className="weatherfeed-tr">
            <div className="weatherfeed-table-days-container">
              <td class="weatherfeed-table-days-td">&nbsp;</td>
              <td class="weatherfeed-table-days-td">&nbsp;</td>
              <td class="weatherfeed-table-days-td">&nbsp;</td>
            </div>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-wind">
                <span class="windu">mph</span>
              </div>
            </td>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-summary">
                <span class="summary">summary</span>
              </div>
            </td>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-summary">
                <span class="snow">☃️ in</span>
              </div>
            </td>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-summary">
                <span class="rain">☔️ in</span>
              </div>
            </td>
            <td class="weatherfeed-table-days-td">
              <div class="weatherfeed-table-summary">
                <span class="temp">🌡 max֯֯ F</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherfeedHeadersTable;
