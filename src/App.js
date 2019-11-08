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
      <input
        className="search-bar"
        type="search"
        value={search}
        onChange={event => {
          setSearch(event.target.value);
        }}
      />
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
