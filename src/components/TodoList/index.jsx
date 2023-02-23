
/**
 * App sẽ đóng vai trò làm logic
 * App sẽ truyền danh sách todo cho component TodoList để render
 * Component TodoList sẽ lấy thông tin về todo mà người dùng click và truyền cho App thông qua props
 * App sẽ nhận giá trị mà component TodoList đã truyền và tiến hành xử lý để xoá đi phần tử trong TodoList -> lưu ý tạo ra newTodoList để xoá phần tử xong mới set nó cho todoList
 */

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
            {todo.id}-{todo.title} - 
            <button onClick={() => handleClick(todo)}>Delete</button>
          </li>
        ))}
    </ul>
  )
}