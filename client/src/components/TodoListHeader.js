import React from 'react';
// import {List, Map} from 'immutable';

export default React.createClass({
  remainingTodos: function() {
    // console.log('this.props', this.props);
    return this.props.todos.size;
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
