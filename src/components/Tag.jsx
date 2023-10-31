import React from "react";
import "./Tag.css";

const Tag = ({ children, selectTag, isSelected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      style={isSelected ? tagStyle[children] : tagStyle.default}
      type="button"
      className="tag"
      onClick={() => selectTag(children)}
    >
      {children}
    </button>
  );
};

export default Tag;
