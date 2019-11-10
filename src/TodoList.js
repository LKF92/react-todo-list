import React from "react";
import Task from "./Task";

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
        .map((currentTask, index) => {
          const { task, isDone, created } = currentTask;
          return (
            <Task
              key={index + created}
              crossMe={() => {
                let updatedTodoList = [...todoList];
                currentTask.isDone = !isDone;
                setTodoList(updatedTodoList);
              }}
              deleteMe={() => {
                const updatedTodoList = [...todoList];
                updatedTodoList.splice(updatedTodoList.indexOf(currentTask), 1);
                setTodoList(updatedTodoList);
              }}
              currentTask={currentTask}
            />
          );
        })}
    </ul>
  );
};

export default TodoList;
