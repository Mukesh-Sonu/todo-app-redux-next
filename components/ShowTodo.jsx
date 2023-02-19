"use client";
import Button from "./FilterStatusButton";
import React from "react";

const ShowTodo = ({ filter, setFilter }) => {
  const handleClick = (name) => {
    setFilter(name);
  };

  return (
    <div className="showtask">
      <div className="all-and-active-button">
        <Button name="all" filter={filter} handleClick={handleClick} />
        <Button name="active" filter={filter} handleClick={handleClick} />
      </div>

      <div className="completed-button">
        <Button name="completed" filter={filter} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default ShowTodo;
