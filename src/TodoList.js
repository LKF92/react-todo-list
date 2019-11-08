import React from "react";
import Task from "./Task";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <ul className="todo-list">
      {todoList.map((task, index) => {
        return (
          <div className="task">
            <div>
              <Task task={task} key={"task-" + index} />
            </div>
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
