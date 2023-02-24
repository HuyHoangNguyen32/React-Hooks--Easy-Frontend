import { useEffect, useState } from 'react';
import { ColorBox } from './components/ColorBox';
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm';
import styles from './App.module.scss';
import { PostList } from './components/PostList';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend'},
    { id: 2, title: 'We love Easy Frontend'},
    { id: 3, title: 'They love Easy Frontend'},
  ])

  const [postList, setPostList] = useState([])

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

  // PostList
  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()
        console.log(responseJSON)
  
        const { data } = responseJSON
        setPostList(data)
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message)
      }
    }

    console.log('POST list effect')
    fetchPostList()
  },[])

  useEffect(() => {
    console.log('TODO list effect')
  })


  return (
    <div className={styles.paddingPage}>
      <h1>Welcome to React Hooks</h1>
      <PostList posts={postList}/>
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
