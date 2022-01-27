import React, { useEffect, useState } from "react";
import FormTodo from "./FormTodo/FormTodo";
import TaskList from "./TaskList/TaskList";
import "./TodoApp.css";
import { v4 as uuidv4 } from "uuid";
const TodoApp = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [filter, setFilter] = useState("all");
  const [showFilter, setShowFilter] = useState([]);
  useEffect(() => {
    if (filter === "all") {
      setShowFilter(data);
    }
    if (filter === "active") {
      const activeTasks = data.filter((item) => item.status === false);
      setShowFilter(activeTasks);
    }
    if (filter === "complete") {
      const activeTasks = data.filter((item) => item.status === true);
      setShowFilter(activeTasks);
    }
  }, [data, filter]);
  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem("task"));
    if (storedTask) {
      setData(storedTask);
    }
  }, []);
  const addTask = (title) => {
    const newTask = [
      ...data,
      {
        id: uuidv4(),
        title: title,
        status: false,
      },
    ];

    setData(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  };
  const deleteItem = (taskId) => {
    const deleteTask = data.filter((item) => item.id !== taskId);
    setData(deleteTask);
    localStorage.setItem("task", JSON.stringify(deleteTask));
  };

  const handleCheckbox = (item) => {
    let newTask = data;
    const replaceStatus = data.findIndex((items) => items.id === item.id);
    newTask[replaceStatus].status = !newTask[replaceStatus].status;
    setRefresh(refresh + 1);
    setData(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  };

  return (
    <div className="todoApp">
      <FormTodo addTask={addTask} />
      <TaskList
        data={showFilter}
        deleteItem={deleteItem}
        handleCheckbox={handleCheckbox}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};

export default TodoApp;
