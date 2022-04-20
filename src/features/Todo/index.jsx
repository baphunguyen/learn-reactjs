import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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

  const renderedTodoList = todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  return (
    <div>
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
