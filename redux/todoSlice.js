"use client";
import { setItemInLocalStorage } from "@/utils/setLocalStorageData";
import { createSlice } from "@reduxjs/toolkit";
import {
  updateTodoList,
  toggleComplete,
  deleteTodoItem,
} from "../utils/getStateFunctions";

const getInitialState = () => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    return JSON.parse(localStorage.getItem("todos"));
  }
  return null;
};

const todoSlice = createSlice({
  name: "todos",
  initialState: getInitialState() || [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      setItemInLocalStorage(state);
    },
    updateTodo: (state, action) => {
      const index = updateTodoList(state, action);
      state[index].todo = action.payload.todo;
      setItemInLocalStorage(state);
    },
    toggleChecked: (state, action) => {
      const index = toggleComplete(state, action);
      state[index].completed = !state[index].completed;
      setItemInLocalStorage(state);
    },
    deleteTodo: (state, action) => {
      return deleteTodoItem(state, action);
    },
  },
});

export const { addTodo, updateTodo, toggleChecked, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
