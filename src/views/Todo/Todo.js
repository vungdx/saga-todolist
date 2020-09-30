import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodosRequest, deleteTodoRequest, editTodoRequest } from "./actions";

function Todo(props) {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosRequest());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTodoRequest(id));
  };

  const handleEdit = (todo) => {
    dispatch(editTodoRequest(todo));
  };

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Todo</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Todo;
