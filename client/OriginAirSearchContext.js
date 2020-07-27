import React from "react";

const OriginAirSearchContext = React.createContext({
  airport: "",
  airportError: "",
  handleChange() {},
  handleSubmit() {},
  validateLength() {},
});

export const Provider = OriginAirSearchContext.Provider; //entrance portal
export const Consumer = OriginAirSearchContext.Consumer; // exist portal
