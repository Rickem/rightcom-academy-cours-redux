// Exercice 3 : Multiples reducers et combineReducers
// Ajoutez un nouveau feature (par exemple, un message de bienvenue) et utilisez combineReducers.

import { combineReducers } from "redux";

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const messageReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.payload;
    default:
      return state;
  }
};

// Exercice 5
const todosReducer = (
  state = { loading: false, data: [], error: null },
  action
) => {
  switch (action.type) {
    case "FETCH_TODOS_START":
      return { ...state, loading: true };
    case "FETCH_TODOS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_TODOS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: countReducer,
  message: messageReducer,
  // Exercice 5
  todos: todosReducer,
});

export default rootReducer;
