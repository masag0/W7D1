import React from 'react';
import {uniqueId} from '../../util/util';
// import {receiveTodo} from '../../actions/todo_actions';
// import store from '../../store/store';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "buy milk", body: "", done: false };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
  }

  submitHandler (e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
  }

  handleChangeTitle (e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }
  handleChangeBody (e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  render () {
    const {title, body} = this.state;
    return (
    <div>
      <form onSubmit={this.submitHandler}>
        <label>Title:
          <input type="text" value={title} onChange={this.handleChangeTitle} />
        </label>
        <br />
        <label>Body:
          <textarea onChange={this.handleChangeBody} value={body} rows="15" cols="80" />
        </label>
        <br />
        <input type="submit" value="Create Todo!" />
      </form>
    </div>
  );}
}

export default TodoForm;
