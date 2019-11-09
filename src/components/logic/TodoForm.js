import React, { useState } from "react";

function TodoForm({ addTodozz }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodozz(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add Todo..."
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <input type="submit" className="submit" />
    </form>
  );
}

export default TodoForm;
