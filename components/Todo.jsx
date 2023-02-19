"use client";
import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoListItems from "./TodoListItems";
import ShowTodo from "./ShowTodo";
import { useSelector } from "react-redux";

import {
  getPendingCount,
  showActiveList,
  showCompletedList,
} from "../utils/getStateFunctions";

const Todo = () => {
  const list = useSelector((state) => state.todo);
  const [text, setText] = useState({ id: null, todo: "" });
  const [filter, setFilter] = useState("All");
  const [filteredList, setFilteredList] = useState(list);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    if (filter === "active") {
      const newList = showActiveList(list);
      setFilteredList(newList);
    } else if (filter === "completed") {
      const newList = showCompletedList(list);
      setFilteredList(newList);
    } else {
      setFilteredList(list);
    }

    const pendingCount = getPendingCount(list);
    setPending(pendingCount);
  }, [filter, list]);

  return (
    <div className="todolist-container">
      <AddTodo text={text} setText={setText} />
      <ShowTodo filter={filter} setFilter={setFilter} />
      <TodoListItems
        setText={setText}
        filteredList={filteredList}
        pending={pending}
      />
    </div>
  );
};

export default Todo;
