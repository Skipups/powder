import React from "react";

const OriginAirSearchContext = React.createContext({
  originAirport: "SEA",
  handleOriginAirportChange() {},
});

export const Provider = OriginAirSearchContext.Provider; //entrance portal
export const Consumer = OriginAirSearchContext.Consumer; // exist portal
