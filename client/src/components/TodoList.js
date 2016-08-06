import React from 'react';
import {List, Map, fromJS} from 'immutable';
import TodoListHeader from './TodoListHeader';
import TodoListItems from './TodoListItems';
import AddTodo from './AddTodo';

window.Map = Map;

export default React.createClass({
  persist: function() {
    localStorage.setItem('state', JSON.stringify(this.state));
  },
  getInitialState: function() {
    return JSON.parse(localStorage.getItem('state')) || {
      todos: []
    };
  },
  handleAddTodo: function(text) {
    // const todos = this.state.todos.push({ text, completed: false });
    this.setState({
      todos: [...this.state.todos, { text: text, completed: false }]
    }, this.persist);
  },
  handleRemoveTodo: function(index) {
    // const todos = this.state.todos.push({ text, completed: false });
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
    }, this.persist);
  },
  handleToggleTodo: function(index) {
    this.setState({
      todos: this.state.todos.map((todo, i) => {
        if (i === index) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    }, this.persist);
  },
  render: function() {
    return (
      <div>
        <table className="todoList">
          <TodoListHeader {...this.state} />
          <TodoListItems {...this.state} handleToggleTodo={this.handleToggleTodo} handleRemoveTodo={this.handleRemoveTodo} />
        </table>
        <AddTodo handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});
