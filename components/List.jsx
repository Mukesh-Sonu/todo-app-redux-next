"use client";
import DeleteIconSvg from "@/SVG/deleteIcon";
import EditIconSvg from "@/SVG/editIcon";

const List = ({ item, handleChecked, handleDelete, handleEdit }) => {
  return (
    <>
      <li className="todo-item">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handleChecked(item.id)}
        />
        <span className="list-item">{item.todo}</span>
      </li>
      <div className="list-buttons">
        <button
          className="todo-list-button edit-button"
          onClick={() => handleEdit(item)}
        >
          <span>
            <EditIconSvg />
          </span>{" "}
          <span> Edit</span>
        </button>
        <button
          className="todo-list-button delete-button"
          onClick={() => handleDelete(item)}
        >
          <span>
            <DeleteIconSvg width={18} height={18} />
          </span>{" "}
          <span>Delete</span>
        </button>
      </div>
    </>
  );
};

export default List;
