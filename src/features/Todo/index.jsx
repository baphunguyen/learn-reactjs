import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all');
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed', error.message);
      }
    }
    fetchPostList();
  }, [filters]);

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  };

  const handleShowNewClick = () => {
    setFilteredStatus('new');
  };

  const handleTodoFormSubmit = (formValue) => {
    const newTodoList = [...todoList];
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };
  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  const renderedTodoList = todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  return (
    <div>
      <h3>Post List</h3>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <h3>Todo List</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
