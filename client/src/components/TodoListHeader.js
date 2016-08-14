import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <thead>
        <tr>
          <th>Todos <small>({ this.props.todos.size })</small></th>
        </tr>
      </thead>
    );
  }
});
