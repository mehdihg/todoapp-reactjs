import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ data, deleteItem, handleCheckbox, setFilter, filter }) => {
  return (
    <div>
      <TaskItem
        setFilter={setFilter}
        data={data}
        deleteItem={deleteItem}
        handleCheckbox={handleCheckbox}
        filter={filter}
      />
    </div>
  );
};

export default TaskList;
