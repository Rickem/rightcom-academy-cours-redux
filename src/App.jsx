import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, setMessage } from "./utils/actions";
import ContactForm from "./components/Form";
import ParentForn from "./components/ParentForn";
import {
  increment,
  decrement,
  multiplyBy2,
  incrementByAmount,
} from "./utils/toolkit/counterSlice";
// import {
//   // Exercice 3: import setMessage
//   setMessage,
// } from "./utils/actions";

// Exercice 5
// import TodosList from "./components/TodosList";

function App() {
  // Exercice 1
  const count = useSelector((state) => state.counter.value);
  // Exercice 3
  const message = useSelector((state) => state.message.value);

  // all
  const dispatch = useDispatch();

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <div className="bg-blue-200 p-2">
        <p>Count: {count}</p>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white px-2 p-1 rounded-md"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white px-2 p-1 rounded-md hover:bg-red-600"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="bg-green-500 text-white px-2 p-1 rounded-md hover:bg-green-600"
            onClick={() => dispatch(incrementByAmount(message))}
          >
            Multiply by {message}
          </button>
        </div>
      </div>
      {/* <div className="bg-purple-200 p-2">
        <input
          className="p-2 border border-purple-500 outline-purple-500 rounded-md"
          value={message}
          onChange={(e) => dispatch(setMessage(e.target.value))}
          placeholder="Enter a message"
        />
        <p>Message: {message}</p>
      </div> */}

      {/* Contact form */}
      {/* <ContactForm message={message} /> */}
      <ParentForn />
      {/* <div className="bg-green-200 p-2">
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

     

      <div className="bg-orange-200 p-2">
        <TodosList />
      </div> */}
    </div>
  );
}

export default App;
