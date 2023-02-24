import { useEffect, useState } from 'react';
import { ColorBox } from './components/ColorBox';
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm';
import styles from './App.module.scss';
import { PostList } from './components/PostList';
import { Pagination } from './components/Pagination';
import queryString from 'query-string';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend'},
    { id: 2, title: 'We love Easy Frontend'},
    { id: 3, title: 'They love Easy Frontend'},
  ])

  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })

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
        const paramsString = queryString.stringify(filters)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()
        console.log(responseJSON)
  
        const { data, pagination } = responseJSON
        setPostList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message)
      }
    }

    console.log('POST list effect')
    fetchPostList()
  },[filters])

  useEffect(() => {
    console.log('TODO list effect')
  })

  function handlePageChange(newPage) {
    console.log('New page: ', newPage)
    setFilters({
      ...filters,
      _page: newPage
    })
  }



  return (
    <div className={styles.paddingPage}>
      <h1>Welcome to React Hooks</h1>
      <PostList posts={postList}/>
      <Pagination 
        pagination={pagination} 
        onPageChange={handlePageChange}
      />
      <br />
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
