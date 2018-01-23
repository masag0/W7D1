import React from 'react';
// import TodoDetailViewContainer from './todo_detail_view_container';

class TodoDetailView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const {title, id, body, removeTodo} = this.props;

    return (
      <div>
        <h4>Detail View</h4>
        <section>{body}</section>
        <button onClick={() => removeTodo(id)}>Delete Todo</button>
      </div>
    );
  }


}

export default TodoDetailView;
