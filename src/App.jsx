import React , { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [newTodo, SetNewTodo] = useState("Learn React");

  return (
    <div>
      <h1>My Todo App</h1>
      <TodoForm />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
