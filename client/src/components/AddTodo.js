import React from 'react';

export default React.createClass({
  addTodo: function(e) {
    e.preventDefault();
    let todoInput = this.refs.todoInput;
    this.props.handleAddTodo(todoInput.value);
    todoInput.value = '';
    console.log('attempting to add');
  },
  render: function() {
    return (
      <form onSubmit={this.addTodo}>
        <input placeholder="add a todo" type="text" ref="todoInput" />
        <button type="submit">Add</button>
      </form>
    );
  }
});
