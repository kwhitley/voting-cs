import React from 'react';

export default React.createClass({
  addTodo: function(e) {
    e.preventDefault();
    let todoInput = this.refs.todoInput;
    this.props.addTodo(todoInput.value);
    todoInput.value = '';
  },
  render: function() {
    return (
      <form onSubmit={this.addTodo} className="addTodo">
        <input placeholder="add a todo" type="text" ref="todoInput" />
        <button type="submit">Add</button>
      </form>
    );
  }
});
