"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import TodoListItems from "./TodoListItems";

import {
  getPendingCount,
  showActiveList,
  showCompletedList,
} from "../utils/getStateFunctions";
import { useInput } from "@/hooks/useInput";

const Todo = () => {
  const list = useSelector((state) => state.todo);
  const [text, setText, handleEdit, reset] = useInput({ id: null, todo: "" });
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
      <AddTodo text={text} setText={setText} reset={reset} />
      <ShowTodo filter={filter} setFilter={setFilter} />
      <TodoListItems
        setText={handleEdit}
        filteredList={filteredList}
        pending={pending}
      />
    </div>
  );
};

export default Todo;
