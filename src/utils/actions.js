export const increment = () => ({ type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });

export const setMessage = (message) => ({
  type: "SET_MESSAGE",
  payload: message,
});
