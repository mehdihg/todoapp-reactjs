import React from "react";
import FilterTasks from "../FilterTasks/FilterTasks";
import "./TaskItem.css";
import { FaTrashAlt } from "react-icons/fa";
const TaskItem = ({ data, deleteItem, handleCheckbox, setFilter, filter }) => {
  return (
    <div className="taskItemContainer">
      <ul className="taskItems">
        {data.length
          ? data.map((items) => {
              return (
                <li key={items.id} className="taskItemList">
                  <input
                    type="checkbox"
                    checked={items.status}
                    onChange={() => handleCheckbox(items)}
                  />
                  <h3>{items.title}</h3>
                  <span onClick={() => deleteItem(items.id)}>
                    <FaTrashAlt />
                  </span>
                </li>
              );
            })
          : ""}
      </ul>
      <FilterTasks data={data} setFilter={setFilter} filter={filter} />
    </div>
  );
};

export default TaskItem;
