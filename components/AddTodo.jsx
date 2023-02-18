"use client";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/todoSlice";
import { nanoid } from "nanoid";

const AddTodo = ({ text, setText }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.todo === "") return;

    if (text.id) {
      dispatch(
        updateTodo({
          id: text.id,
          todo: text.todo,
        })
      );
    } else {
      dispatch(addTodo({ id: nanoid(), todo: text.todo, completed: false }));
    }

    setText({ id: null, todo: "" });
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <input
          className="add-task-input"
          ref={inputRef}
          type="text"
          placeholder="Add Item..."
          value={text.todo}
          onChange={(e) =>
            setText((prevText) => ({ ...prevText, todo: e.target.value }))
          }
        />
        <button className="add-task-button" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
