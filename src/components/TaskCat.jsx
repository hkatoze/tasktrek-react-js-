import React from "react";
import "./TaskCat.css";

import TaskCard from "./TaskCard";

const TaskCat = ({ title, icon, taskList, setTaskLocalData }) => {
  const handleDelete = (indexToDelete) => {
    setTaskLocalData(taskList.filter((item, index) => index !== indexToDelete));
  };
  return (
    <div className="task_cat">
      <div className="task_cat_title">
        <i>
          <img src={icon} alt="" />
        </i>{" "}
        <h2>{title}</h2>
      </div>
      <div className="task_column">
        {taskList.map(
          (item, index) =>
            item.status === title && (
              <TaskCard
                key={index}
                title={item.title}
                tags={item.tags}
                status={item.status}
                handleDelete={() => handleDelete(index)}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TaskCat;
