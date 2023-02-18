"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleChecked, deleteTodo } from "../redux/todoSlice";
import { useSelector } from "react-redux";
import List from "./List";

const TodoListItems = ({ setText, filteredList, pending }) => {
  const list = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleChecked = (checkedId) => {
    dispatch(
      toggleChecked({
        id: checkedId,
      })
    );
  };

  const handleEdit = (editItem) => {
    setText({ id: editItem.id, todo: editItem.todo });
  };

  const handleDelete = (deleteItem) => {
    dispatch(
      deleteTodo({
        id: deleteItem.id,
      })
    );
  };

  return (
    <>
      {!pending.length && <h2>{pending} task remaining</h2>}
      <div className="todo-list-items">
        {!list.length ? (
          <h3 className="zero-state">Add your first Todo</h3>
        ) : (
          <>
            <ul>
              {filteredList.map((item, index) => (
                <div key={index}>
                  <List
                    item={item}
                    handleChecked={handleChecked}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                </div>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default TodoListItems;
