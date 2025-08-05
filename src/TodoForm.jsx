import { useRef } from "react";

function TodoForm( { onAddTodo }){
  const todoTitleInput = useRef("");
  
  function handleAddtodo(event) {
    event.preventDefault();

    const title = event.target.title.value;

    onAddTodo(title);

    event.target.title.value = "";
    todoTitleInput.current.focus();
  }
  return (
    <form onSubmit={handleAddtodo}>
      <input
        type="text"
        name="title"
        placeholder="Add a todo"
        ref={todoTitleInput}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;