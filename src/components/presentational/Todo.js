import React from "react";
import "./todo.scss";

function Todo({ todo, index, markDone, clear }) {
  return (
    <div className={`todo ${todo.isCompleted ? "completed" : "incompleted"}`}>
      <span className="check">{todo.isCompleted ? "✔" : "X"}</span>
      <span
        onClick={evt => {
          markDone(evt, index);
          // console.log(evt);
        }}
        className="text"
      >
        {todo.text}
      </span>{" "}
      <span
        onClick={() => {
          clear(index);
        }}
        className="trash"
      >
        &#128465;
      </span>
    </div>
  );
}

export default Todo;
