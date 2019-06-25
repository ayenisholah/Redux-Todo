import uuid from 'uuid';
import { 
  ADD_TODO,
  MARK_TODO_AS_COMPLETE,
  DELETE_TODO 
} from './actionTypes';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: {
      todo,
      id: uuid(),
      completed: false
    } 
  };
}

export function markTodoAsComplete(id) {
  return {
    type: MARK_TODO_AS_COMPLETE,
    payload: id
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  };
}