import { 
  FILTER_PRIORITY, 
  REMOVE_PRIORITY, 
  FILTER_LABEL, 
  REMOVE_LABEL, 
  FILTER_COLOR, 
  REMOVE_COLOR, 
  CLEAR_FILTERS,
  SORT_BY_DATE
} from "./constants/filter-constants"
export const FilterReducer = (filterState, action) => {
  switch (action.type) {
    case FILTER_PRIORITY:
      return { ...filterState, priorityFilter: [...filterState.priorityFilter, action.payload] }
    case REMOVE_PRIORITY:
      return { ...filterState, priorityFilter: filterState.priorityFilter.filter((p) => p !== action.payload) }
    case FILTER_LABEL:
      return { ...filterState, labelFilter: [...filterState.labelFilter, action.payload] }
    case REMOVE_LABEL:
      return { ...filterState, labelFilter: filterState.labelFilter.filter(l => l !== action.payload) }
    case FILTER_COLOR:
      return { ...filterState, colorFilter: [...filterState.colorFilter, action.payload] }
    case REMOVE_COLOR:
      return { ...filterState, colorFilter: filterState.colorFilter.filter(c => c !== action.payload) }
    case SORT_BY_DATE:
      return {...filterState, dateSort: action.payload}
    case CLEAR_FILTERS:
      return {
        priorityFilter: "",
        labelFilter: "",
        colorFilter: "",
        dateSort: 0
      };
    default:
      return filterState;
  }
};
