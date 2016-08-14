import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TodoText from './TodoText';

export default React.createClass({
  mixins: [PureRenderMixin],
  toggleTodo: function() {
    this.props.toggleTodo(this.props.todo.id);
  },
  removeTodo: function(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo.id);
  },
  render: function() {
    const {todo} = this.props;
    return (
      <tr className={'todoItem ' + (todo.completed && 'completed')}>
        <td>
          <label onClick={this.toggleTodo}></label>
          <TodoText {...this.props} />
          <a href="#" className="remove" onClick={this.removeTodo}>remove</a>
        </td>
      </tr>
    );
  }
});
