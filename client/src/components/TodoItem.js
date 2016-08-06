import React from 'react';

export default React.createClass({
  toggleStatus: function() {
    this.props.handleToggleTodo(this.props.index);
  },
  removeTodo: function(e) {
    e.preventDefault();
    this.props.handleRemoveTodo(this.props.index);
  },
  render: function() {
    const {todo} = this.props;
    return (
      <tr className="todoItem">
        <td>
        <label className={todo.completed && 'completed'}>
          <input
            type="checkbox"
            ref="isComplete"
            checked={todo.completed}
            onChange={this.toggleStatus}
          />
          {this.props.todo.text}
        </label>
        <a href="#" className="remove" onClick={this.removeTodo}>remove item</a>
        </td>
      </tr>
    );
  }
});
