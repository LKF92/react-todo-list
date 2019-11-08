import React, { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [taskDone, setTaskDone] = useState(false);
  return (
    <div className="page-wrapper">
      <h1>To-Do list</h1>

      <div className="todo-list">
        <ul>
          {todoList.map((task, index) => {
            return <Task task={task} />;
          })}
        </ul>
      </div>
      <div className="form">
        <form
          onSubmit={event => {
            event.preventDefault();
            const newTask = [...todoList, taskInput];
            setTodoList(newTask);
            setTaskInput("");
          }}
        >
          <input
            className="task-input"
            type="text"
            value={taskInput}
            onChange={event => setTaskInput(event.target.value)}
          />
          <button className="task-btn">Add task</button>
        </form>
      </div>
    </div>
  );
}

export default App;
