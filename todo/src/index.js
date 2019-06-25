import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { todosReducer } from './reducers/reducers'

const combinedReducer = combineReducers({
  todos: todosReducer
})

const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);


