import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  const [newTodo, setNewTodo] = useState("Learn React");

  return (
    <div>
      <h1>My Todo App</h1>
      <TodoForm />
      <p>{newTodo}</p> {/* <-- Display newTodo */}
      <TodoList />
    </div>
  );
}

export default App
