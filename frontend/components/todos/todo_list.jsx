import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import {uniqueId} from '../../util/util';
// import {receiveTodo} from '../../actions/todo_actions';

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map( (el, idx) => (
          <TodoListItem id={el.id} done={el.done} key={idx}
            title={el.title} body={el.body}
            removeTodo={props.removeTodo} />
        ))}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  );};

export default TodoList;
