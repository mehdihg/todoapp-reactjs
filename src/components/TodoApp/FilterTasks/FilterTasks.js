import React from "react";
import "./FilterTasks.css";
const FilterTasks = ({ data, setFilter, filter }) => {
  return (
    <div className="filterTaskContainer">
      <div className="itemCounts">
        <span>{data.length} items</span>
      </div>
      <div className="filterTaskButton">
        <button
          className={filter === "all" ? "allButton" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "activeButton" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "complete" ? "completeButton" : ""}
          onClick={() => setFilter("complete")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default FilterTasks;
