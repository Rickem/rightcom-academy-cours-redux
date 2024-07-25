import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import messageReducer from "./messageSLice";

// slice === reducer
export const store = configureStore({
  reducer: {
    counter: counterReducer, // slice
    message: messageReducer,
  },
});
