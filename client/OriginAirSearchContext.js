import React from "react";

const OriginAirSearchContext = React.createContext({
  airport: "",
  handleChange() {},
  handleSubmit() {},
});

export const Provider = OriginAirSearchContext.Provider; //entrance portal
export const Consumer = OriginAirSearchContext.Consumer; // exist portal
