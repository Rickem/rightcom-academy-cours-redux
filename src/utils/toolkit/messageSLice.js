import { createSlice } from "@reduxjs/toolkit";

// reducer === action
const messageSlice = createSlice({
  name: "message",
  initialState: { value: 2 },
  // actions
  reducers: {
    setMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
