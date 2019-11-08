import React from "react";
// import Task from "./Task";

const TodoList = ({ todoList, setTodoList, search }) => {
  return (
    <ul className="todo-list">
      <p>
        <u>{todoList.length > 0 ? "Created on :" : null}</u>
      </p>
      {todoList
        .filter(task => RegExp(search, "i").test(task.task))
        .sort((task1, task2) => {
          return task1.isDone === task2.isDone ? 0 : task1.isDone ? 1 : -1;
        })
        .map(({ task, isDone, created }, index) => {
          return (
            <div className="task">
              <div className="time-of-creation">{created}</div>
              <li
                className={isDone === true ? "task-done" : "task-todo"}
                onClick={() => {
                  const updatedTodoList = [...todoList];
                  updatedTodoList[index].isDone = !isDone;
                  setTodoList(updatedTodoList);
                }}
              >
                {task}
              </li>
              <div
                onClick={() => {
                  const updatedTodoList = [...todoList];
                  updatedTodoList.splice(index, 1);
                  setTodoList(updatedTodoList);
                }}
              >
                ❌
              </div>
            </div>
          );
        })}
    </ul>
  );
};

export default TodoList;
