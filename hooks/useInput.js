"use client";
import { useState } from "react";

export const useInput = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const setText = (e) => {
    setState((prevText) => ({ ...prevText, todo: e.target.value }));
  };

  const handleEdit = (editItem) => {
    setState({ id: editItem.id, todo: editItem.todo });
  };

  const reset = () => {
    setState({ id: null, todo: "" });
  };

  return [state, setText, handleEdit, reset];
};
