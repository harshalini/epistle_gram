import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "./reducers/filter-reducer";

const sortFiltercontext = createContext();
const FilterDataProvider = ({ children }) => {

  const [
    filterState,
    filterDispatch
  ] = useReducer(FilterReducer, {
    priorityFilter: "",
    labelFilter: "",
    colorFilter: "",
    dateSort: 0
  });

  return (
    <sortFiltercontext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </sortFiltercontext.Provider>
  );
};
const useFilteredData = () => useContext(sortFiltercontext);

export { useFilteredData, FilterDataProvider };
