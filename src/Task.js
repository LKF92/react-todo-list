import React, { useState } from "react";

const Task = props => {
  const { crossMe, deleteMe, currentTask } = props;
  const { task, isDone, created } = currentTask;

  return (
    <li className="task">
      <p className="time-of-creation">{created}</p>
      <p
        className={isDone === true ? "task-done" : "task-todo"}
        onClick={crossMe}
      >
        {task}
      </p>
      <p onClick={deleteMe}>❌</p>
    </li>
  );
};

export default Task;
