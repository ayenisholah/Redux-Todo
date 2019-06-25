import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actionCreators';

const TodoForm = (props) => {
  const onAddTodo = (event) => {
    const todoInput = event.target['todo'];
    event.preventDefault();

    todoInput.value
    && props.addTodo(
      todoInput.value
    );

    todoInput.value = '';
  }

  return (
    <div>
      <form onSubmit={onAddTodo} className="todo-form" >
        <input name="todo" placeholder="Todo here..." />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default connect(
  null,
  { addTodo }
)(TodoForm)