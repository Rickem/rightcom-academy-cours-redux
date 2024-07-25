import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../utils/_actions";

const TodosList = () => {
  // Exercice 5
  const todos = useSelector((state) => state.todos);

  // all
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, [dispatch]);

  if (todos.loading) return <p>Loading...</p>;
  if (todos.error) return <p>Error: {todos.error}</p>;

  return (
    <div>
      <ul>
        {todos.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
