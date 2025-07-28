//src/TodoList.jsx
import TodoListItem from './TodoListitem';
function TodoList(){
    const todos =[
        {id: 1, title: 'Learn React'},
        {id: 2, title: 'Build a Todo App'},
        {id: 3, title: 'Submit Assignment'},
    
    ];
    return (
      <ul>
        {todos.map((todo)=>(
          <TodoListItem key={todo.id} todo={todo}  />
         ))}
      </ul>
    );
}
export default TodoList;