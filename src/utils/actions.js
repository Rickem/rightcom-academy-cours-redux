// Exercice 2 : Actions et action creators
// Créez des action creators pour l'application de compteur.

// Exercice 5
import axios from "axios";

export const increment = () => ({ type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });

// Exercice 3
export const setMessage = (message) => ({
  type: "SET_MESSAGE",
  payload: message,
});

// Exercice 5 : Actions asynchrones avec Redux Thunk
// Implémentez une action asynchrone pour charger des données depuis une API.
export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_TODOS_START" });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const data = await response.json();
      dispatch({ type: "FETCH_TODOS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_TODOS_ERROR", payload: error.message });
    }
  };
};
