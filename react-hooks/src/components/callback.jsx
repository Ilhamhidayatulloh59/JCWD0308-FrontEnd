import { useState } from "react";
import TodoList from "./todo";

export const ComponentCallback = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    setTodo(() => [...todo, "new value"]);
  };

  return (
    <div>
      <TodoList todo={todo} addTodo={addTodo} />
      <button onClick={() => setCount(count + 1)}>count : {count}</button>
    </div>
  );
};
