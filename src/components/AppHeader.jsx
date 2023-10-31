import React, { useState } from "react";
import "./AppHeader.css";
import Tag from "./Tag.jsx";

const AppHeader = ({ setTaskLocalData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("Todo");
  const [tasks, setTasks] = useState({ title: "", status: "Todo", tags: [] });
  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskLocalData((prev) => [...prev, tasks]);
    setSearchValue("");
    setSelectValue("Todo");

    setTasks({ title: "", status: "Todo", tags: [] });
  };
  const checkTag = (tag) => {
    return tasks.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (tasks.tags.some((item) => item === tag)) {
      const newTags = tasks.tags.filter((item) => item !== tag);
      setTasks((prev) => ({ ...prev, tags: newTags }));
    } else {
      setTasks((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchValue(event.target["title"].value);
    setTasks((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="app_header">
        <div className="search_bar_container">
          <input
            type="text"
            name="title"
            placeholder="Enter your task"
            onChange={handleChange}
            value={searchValue}
          />
        </div>
        <div className="search_bar_actions_container">
          <div className="tags_container">
            <Tag selectTag={selectTag} isSelected={checkTag("HTML")}>
              HTML
            </Tag>
            <Tag selectTag={selectTag} isSelected={checkTag("CSS")}>
              CSS
            </Tag>
            <Tag selectTag={selectTag} isSelected={checkTag("JavaScript")}>
              JavaScript
            </Tag>
            <Tag selectTag={selectTag} isSelected={checkTag("React")}>
              React
            </Tag>
          </div>
          <div className="actions_container">
            <select
              name="status"
              value={selectValue}
              id=""
              onChange={handleChange}
            >
              <option value="To Do">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>

            <button type="submit">+ Add Task</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AppHeader;
