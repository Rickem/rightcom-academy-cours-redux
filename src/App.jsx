import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./utils/actions";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <div className="bg-blue-200 p-2">
        <p>Count: {count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
      <div className="bg-green-200 p-2">
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
