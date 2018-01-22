import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import {uniqueId} from '../../util/util';
// import {receiveTodo} from '../../actions/todo_actions';

const TodoList = (props) => {
  console.log(props.todos);
  return (
    <div>
      <ul>
        {props.todos.map( (el, idx) => (
          <TodoListItem key={idx} title={el.title}/>
        ))}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  );};

export default TodoList;
