import React from 'react'

const SearchContext = React.createContext{(
  origin:"New York, NY",
  pass: "",
  handleOriginChange(){},
  handdlePassChange(){},

)}

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer