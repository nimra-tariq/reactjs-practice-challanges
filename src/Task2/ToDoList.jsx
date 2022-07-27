import React from "react";
import { useState, useReducer } from "react";
import { ToDoReducer } from "./reducer/reducer";
import ToDoItems from "./ToDoItems";
import "./TaskItem.css"

const ToDoList = () => {
  const initialState = [];
  const [state, dispatch] = useReducer(ToDoReducer, initialState);
  const [des, setDes] = useState("");
  const [counter, setCounter] = useState(0);
  console.log(state);

  return (
    <>
      <div className="todo">
        <h1>TODO APP</h1>
      </div>
      <div className="task">
        <h3>Add Task</h3>
      </div>
      <form>
        <input
          type="text"
          placeholder="task Description here"
          onChange={(e) => setDes(e.target.value)}
          value={des}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setCounter(counter + 1);
            dispatch({
              type: "ADD_TASK",
              value: { id: counter + 1, description: des },
            });
            setDes("");
          }}
        >
          ADD Task
        </button>
      </form>
      <div className="task">
        <h3>ITEM LIST</h3>
      </div>
      <div className="item-container">
        {state?.map(({ id, description}, i) => (
          <ToDoItems
            i={i}
            key={i}
            id={id}
            descritption={description}
            dispatch={dispatch}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoList;
