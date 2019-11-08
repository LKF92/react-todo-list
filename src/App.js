import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="page-wrapper">
      <h1>To-Do list</h1>

      <TodoList todoList={todoList} setTodoList={setTodoList} />

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
