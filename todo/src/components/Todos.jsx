import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { deleteTodo, addTodo, markTodoAsComplete } from '../actions/actionCreators';

export class Todos extends React.Component {
  render() {
    return (
      <div>
        <h1>My Todo</h1>
        <div>
          {
            this.props.todos.map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                markTodoAsComplete={this.props.markTodoAsComplete}
                deleteTodo={this.props.deleteTodo}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(reducers) {
  return {
    todos: reducers.todos
  }
}

export default connect(
  mapStateToProps,
  { deleteTodo, markTodoAsComplete }
)(Todos);