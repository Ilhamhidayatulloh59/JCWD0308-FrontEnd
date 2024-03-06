import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const action = {
  inc: "increment",
  dec: "decrement",
};

const initialState = { count: 0 };

export const ComponentReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: action.inc })}>increment</button>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: action.dec })}>decrement</button>
    </div>
  );
};
