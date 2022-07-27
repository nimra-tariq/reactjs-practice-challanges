import React from "react";
import "./TaskItem.css";
import { useState } from "react";

const ToDoItems = ({ id, descritption, dispatch, i }) => {
  const [edit, setEdit] = useState("");
  const [checked, setChecked] = useState(false);

  const editTask = () => {
    console.log(edit, "edit");
    dispatch({ type: "EDIT_TASK", value: { id, description: edit } });
  };

  return (
    <div className="item">
      <h2>Task id : {i + 1}</h2>
      <div className="desc">
        <input
          type="checkbox"
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <h3>{descritption}</h3>
      </div>
      {checked ? <div className="task">task completed</div> : null}
      <div>
        <button
          onClick={() => dispatch({ type: "DELETE_TASK", value: { id } })}
        >
          {" "}
          Delete Task
        </button>
      </div>

      <input
        type="text"
        value={edit}
        onChange={(e) => setEdit(e.target.value)}
        placeholder="edit task"
      />
      <button onClick={editTask}>Edit and Save </button>
    </div>
  );
};

export default ToDoItems;
