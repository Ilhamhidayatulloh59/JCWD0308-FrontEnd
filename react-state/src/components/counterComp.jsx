import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementBy } from "../redux/counter";

export const CounterComp = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementBy(5))}>Increment by 5</button>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
