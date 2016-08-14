import React from 'react';
import TodoItem from './TodoItem';

export default React.createClass({
  render: function() {
    return (
      <tbody>
        {
          this.props.todos.map((todo, index) =>
            <TodoItem className={todo.completed ? 'completed' : ''} key={index} todo={todo} {...this.props} />
          )
        }
      </tbody>
    );
  }
});
