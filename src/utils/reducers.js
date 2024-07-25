import { combineReducers } from "redux";

function countReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "MULTIPLY":
      return { ...state, count: state.count * 2 };
    default:
      return state;
  }
}

function messageReducer(state = "", action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  count: countReducer,
  message: messageReducer,
});

export default rootReducer;
