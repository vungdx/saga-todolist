import React from 'react';
import './App.css';
import Todo from './views/Todo/Todo';
import TodoForm from './views/TodoForm/TodoForm';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <Todo />
    </div>
  );
}

export default App;
