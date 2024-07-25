import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  // Exercice 3: import setMessage
  setMessage,
} from "./utils/actions";

// Exercice 5
import TodosList from "./components/TodosList";

function App() {
  // Exercice 1
  const count = useSelector((state) => state.count);
  // Exercice 3
  const message = useSelector((state) => state.message);

  // all
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

      <div className="bg-purple-200 p-2">
        <input
          value={message}
          onChange={(e) => dispatch(setMessage(e.target.value))}
          placeholder="Enter a message"
        />
        <p>Message: {message}</p>
      </div>

      <div className="bg-orange-200 p-2">
        <TodosList />
      </div>
    </div>
  );
}

export default App;
