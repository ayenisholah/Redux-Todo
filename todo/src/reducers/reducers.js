import todosData from '../todosData';
import { 
  ADD_TODO,
  MARK_TODO_AS_COMPLETE,
  DELETE_TODO 
} from '../actions/actionTypes';

// todosReducer
export function todosReducer(sliceOfState = todosData, action) {
  switch (action.type) {
    case DELETE_TODO:
      return sliceOfState.filter(todo => todo.id !== action.payload);
    case ADD_TODO:
      return sliceOfState.concat(action.payload);
    case MARK_TODO_AS_COMPLETE:
      return sliceOfState.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    default:
      return sliceOfState;
  }
}