import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store.js';
import Root from './frontend/components/root.jsx';
import { receiveTodo, receiveTodos } from './frontend/actions/todo_actions';
import { receiveStep, receiveSteps, removeSteps } from './frontend/actions/step_actions';
// import App from './frontend/components/app';
import { allTodos, stepsByTodoId } from './frontend/reducers/selectors';


window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.receiveStep = receiveStep;
window.receiveSteps = receiveSteps;
window.allTodos = allTodos;
window.stepsByTodoId = stepsByTodoId;



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>, document.getElementById("content"));
  // ReactDOM.render(<App />, document.getElementById("content"));
});
