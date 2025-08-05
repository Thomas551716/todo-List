import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {

  const [TodoList, setTodoList] = useState([]);
  
  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title: title
    };
    setTodoList([...TodoList, newTodo]);
  }

  return (
    <>
      <TodoForm  onAddTodo={addTodo}/>
      <TodoList  todoList ={TodoList} />
    </>
  );

}

export default App;


