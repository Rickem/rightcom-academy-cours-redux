import { createSlice } from "@reduxjs/toolkit";

// reducer === action
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  // actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    multiplyBy2: (state) => {
      state.value *= 2;
    },
    incrementByAmount: (state, action) => {
      state.value *= action.payload;
    },
  },
});

export const { increment, decrement, multiplyBy2, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
