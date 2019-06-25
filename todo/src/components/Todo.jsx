import React from 'react';
import styled from 'styled-components';

const Todo = (props) => {
  return (
    <StyledTodo>
      <h2 className='todo'>{props.todo.todo}</h2>
    </StyledTodo>
  );
}

const StyledTodo = styled.div`
  margin: 12px;
  padding: 32px 16px;
  border: 2px solid white;
  border-radius: 5px;
`
export default Todo;
