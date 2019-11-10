import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="page-wrapper">
      <h1>To-Do list</h1>
      <div className="search">
        <input
          className="search-bar"
          type="search"
          value={search}
          onChange={event => {
            setSearch(event.target.value);
          }}
        />
        <button className="search-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="grey"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      <TodoList todoList={todoList} setTodoList={setTodoList} search={search} />

      <div className="form">
        <form
          onSubmit={event => {
            event.preventDefault();
            let date = new Date();
            date = date.toLocaleTimeString("fr-FR");

            const newTask = [
              ...todoList,
              {
                task: taskInput,
                isDone: false,
                created: date
              }
            ];
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
