import { useState } from "react";
import { useFilteredData, useNoteData } from "../../context/allContext"

export const Filters = () => {
    const { filterState, filterDispatch } = useFilteredData();
    const { priorityFilter, labelFilter, colorFilter, dateSort } = filterState;
    const { individualLabel } = useNoteData();
    const [showFilters, setShowFilters] = useState(false)

    const Colors = ["cadetblue", "chocolate", "darkmagenta", "palevioletred", "brown", "goldenrod", "seagreen"]
    const priorityList = ["high", "medium", "low"]

    const clickFilter = (e, filterContent) => {
        e.target.checked ? filterDispatch({ type: `FILTER-${filterContent}`, payload: e.target.value }) : filterDispatch({
            type: `REMOVE-${filterContent}`, payload: e.target.value
        })
    }

    return (
        <div className="filter-div">
            <button className="login-btn"
                onClick={() => setShowFilters(showFilters => !showFilters)}
            ><span>Filters</span></button>
            {showFilters ?
                <div>
                    <button className="clear-btn" onClick={() => filterDispatch({ type: "CLEAR-FILTERS" })}>Clear filters</button>
                    <span>Filter by priority</span>
                    <div className="filter-flex">
                        {priorityList.map((eachPriority) => (
                            <label htmlFor={eachPriority}>
                                <input type="checkbox" value={eachPriority} id={eachPriority}
                                    onChange={(e) =>
                                        clickFilter(e, "PRIORITY")
                                    }
                                    checked={priorityFilter.includes(eachPriority)}
                                />
                                {eachPriority}
                            </label>
                        ))}
                    </div>
                    <span>Filter by Label</span>
                    {individualLabel.length > 0 ?
                    <div className="filter-flex">
                        {individualLabel.map((eachLabel) => (
                            eachLabel !== "" ?
                                <label htmlFor={eachLabel}>
                                    <input type="checkbox" value={eachLabel} id={eachLabel}
                                        onChange={(e) => clickFilter(e, "LABEL")}
                                        checked={labelFilter.includes(eachLabel)}
                                    />
                                    {eachLabel}
                                </label> : null
                        ))}
                    </div> : <p>No labels added yet</p>
}
                    <span>Filter by color</span>
                    <div className="color-filter">
                        {Colors.map((color) => (
                            <label className={`note-color color-${color}`} htmlFor={color}>
                                <input type="checkbox" value={color} id={color}
                                    onChange={(e) => 
                                        clickFilter(e, "COLOR")
                                    }
                                    checked={colorFilter.includes(color)}
                                />
                            </label>
                        ))}
                    </div>
                    <span>Sort by Date</span>
                    <div className="filter-flex">
                        <label>
                            <input type="radio"
                            onChange={() => filterDispatch({type: "SORT_BY_DATE", payload: "latest_to_oldest"})}
                            checked = {dateSort === "latest_to_oldest"}
                            />
                            Latest to oldest
                        </label>
                        <label>
                            <input type="radio"
                            onChange={() => filterDispatch({type: "SORT_BY_DATE", payload: "oldest_to_latest"})}
                            checked = {dateSort === "oldest_to_latest"}
                            />
                            Oldest to latest
                        </label>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}