function TodoList() {
    const todos =[
        {id: 1, title: 'Learn React'},
        {id: 2, title: 'Build a Todo App'},
    
    ];
    return (
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{WebTransportDatagramDuplexStream.title}</li>
        ))}
        </ul>
    );
}
export default TodoList;