import React, { useState } from "react";

const Task = props => {
  const { task } = props;
  return <li className="task"> {task} </li>;
};

export default Task;
