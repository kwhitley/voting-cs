import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  toggleTodo: function() {
    // const todo = this.props.todo;
    this.props.toggleTodo(this.props.todo.index);
    // console.log('toggling completed to', this.props.todo.completed);
  },
  removeTodo: function(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.index);
  },
  render: function() {
    const {todo} = this.props;
    return (
      <tr className={'todoItem ' + (todo.completed && 'completed')}>
        <td>
          <label onClick={this.toggleTodo}>{todo.text}</label>
          <a href="#" className="remove" onClick={this.removeTodo}>remove</a>
        </td>
      </tr>
    );
  }
});
