"use client";
import React from "react";

const Button = ({ name, filter, handleClick }) => {
  return (
    <button
      className={
        name === filter
          ? "showtask-button showtask-button-filter"
          : "showtask-button"
      }
      onClick={() => handleClick(name)}
    >
      show {name} tasks
    </button>
  );
};

export default Button;
