// store.js
import {
  legacy_createStore as createStore,
  // Exercice 4 : Middleware et logging
  // Ajoutez un middleware de logging à votre store.
  applyMiddleware,
} from "redux";

// Exercice 4
import rootReducer from "./_reducers";

const initialState = { count: 0 };

const loggingMiddleware = (store) => (next) => (action) => {
  console.log("Action:", action);
  const result = next(action);
  console.log("New state:", store.getState());
  return result;
};

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// const store = createStore(rootReducer);
// Exercice 4
const store = createStore(rootReducer, applyMiddleware(loggingMiddleware));
export default store;
