import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Todo from "./components/presentational/Todo.js";
import TodoForm from "./components/logic/TodoForm";
import "./styles.scss";

function App() {
  const initialState = window.localStorage.getItem("list");
  const [toDos, setTodos] = useState(JSON.parse(initialState) || []);

  const switchDone = (evt, index) => {
    const newTodos = [...toDos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    console.log(evt.which);
  };

  const addTodo = text => {
    const newTodos = [...toDos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeItem = index => {
    let newTodos = [...toDos].filter(function(value, i) {
      return i !== index;
    });
    setTodos(newTodos);
  };

  //ssaassasx
  useEffect(() => {
    if (window.localStorage.getItem("list") == null) {
      window.localStorage.setItem(
        "list",
        JSON.stringify([{ text: "Sample ToDozz", isCompleted: false }])
      );
    } else {
      window.localStorage.setItem("list", JSON.stringify(toDos));
    }
  }, [toDos]);

  return (
    <div className="App">
      <h1> Alex's Simple To Do List</h1>
      <h2>
        Made with React Hookz and a lot of love (
        <span description="aria-label" role="img">
          🤮
        </span>
        )!
      </h2>
      <h5 styles="text-align:right; outline:1px solid red;">
        <i>Yea it uses local storage because why not!</i>
      </h5>
      <div className="todo-list">
        {toDos.map((todo, index) => {
          return (
            <Todo
              clear={removeItem}
              markDone={switchDone}
              key={index}
              index={index}
              todo={todo}
            />
          );
        })}
        <TodoForm addTodozz={addTodo} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
