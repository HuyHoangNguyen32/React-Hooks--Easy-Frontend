import { useState } from 'react';
import { ColorBox } from './components/ColorBox';
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm';
import styles from './App.module.scss';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend'},
    { id: 2, title: 'We love Easy Frontend'},
    { id: 3, title: 'They love Easy Frontend'},
  ])

  // TodoList
  function handleTodoClick(todo) {
    // console.log(todo)
    const index = todoList.findIndex(x => x.id === todo.id)
    if(index < 0) return

    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  // TodoForm
  function handleTodoFormSubmit(formValues){
    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)

  }

  return (
    <div className={styles.paddingPage}>
      <h1>Welcome to React Hooks</h1>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList 
        todos={todoList} 
        onTodoClick={handleTodoClick}
      />
      <ColorBox/>
    </div>
  );
}

export default App;
