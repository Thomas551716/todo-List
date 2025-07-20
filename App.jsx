import React from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  return (
    <div>
      <h1>My Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App
