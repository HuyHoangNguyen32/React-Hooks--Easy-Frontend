

export function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if(onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - 
            <button onClick={() => handleClick(todo)}>Delete</button>
          </li>
        ))}
    </ul>
  )
}