import { useCallback, useState } from "react";
import TodoList from "./todo";

export const ComponentCallback = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const addTodo = useCallback(() => {
    setTodo(() => [...todo, "new value"]);
  }, [todo]);

  return (
    <div>
      <TodoList todo={todo} addTodo={addTodo} />
      <button onClick={() => setCount(count + 1)}>count : {count}</button>
    </div>
  );
};
