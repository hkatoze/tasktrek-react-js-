import React, { useState } from "react";
import TODO_ICON from "../assets/direct-hit.png";
import DOING_ICON from "../assets/glowing-star.png";
import DONE_ICON from "../assets/check-mark-button.png";
import "./AppBody.css";
import TaskCat from "./TaskCat";

const AppBody = ({ tasks, setTaskLocalData }) => {
  return (
    <div className="app_body">
      <TaskCat
        title="Todo"
        icon={TODO_ICON}
        taskList={tasks}
        setTaskLocalData={setTaskLocalData}
      />
      <TaskCat
        title="Doing"
        icon={DOING_ICON}
        taskList={tasks}
        setTaskLocalData={setTaskLocalData}
      />
      <TaskCat
        title="Done"
        icon={DONE_ICON}
        taskList={tasks}
        setTaskLocalData={setTaskLocalData}
      />
    </div>
  );
};

export default AppBody;
