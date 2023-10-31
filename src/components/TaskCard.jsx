import React from "react";
import "./TaskCard.css";
import DELETE_ICON from "../assets/delete.png";
import Tag from "./Tag.jsx";
import "../assets/animations/smooth_desapear.js";
import "../assets/animations/smooth_appear.js";
const TaskCard = ({ title, tags, handleDelete }) => {
  return (
    <div className="task_card">
      <h3>{title}</h3>
      <div className="task_card_bottom">
        <div>
          {tags.map((item, index) => (
            <Tag key={index} isSelected={true}>
              {item}
            </Tag>
          ))}
        </div>
        <div className="delete_icon_box" onClick={handleDelete}>
          <img src={DELETE_ICON} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
