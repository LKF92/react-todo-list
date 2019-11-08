import React, { useState } from "react";
import "./App.css";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <>
      <h1>To-Do list</h1>

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
          <button>Add task</button>
        </form>
        {console.log(todoList)}
      </div>
    </>
  );
}

export default App;
