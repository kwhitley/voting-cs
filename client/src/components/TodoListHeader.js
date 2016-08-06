import React from 'react';
import {List, Map} from 'immutable';

export default React.createClass({
  remainingTodos: function() {
    return this.props.todos.filter(todo => !todo.completed).length;
  },
  render: function() {
    return (
      <thead>
        <tr>
          <th>Todos <small>({ this.remainingTodos() })</small></th>
        </tr>
      </thead>
    );
  }
});
