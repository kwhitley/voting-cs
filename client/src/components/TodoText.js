import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return {
      editing: false
    };
  },
  saveTodo: function(e) {
    const {todo, editTodo} = this.props;
    e.preventDefault();
    editTodo(todo.id, this.refs.textInput.value || todo.text);
    this.refs.textInput.value = '';
    this.setState({
      editing: false
    });
  },
  enableEditingMode: function() {
    this.setState({ editing: true });
  },
  componentDidUpdate: function(){
    if (this.refs.textInput) {
      ReactDOM.findDOMNode(this.refs.textInput).select();
    }
  },
  render: function() {
    const {todo} = this.props;
    const {editing, todoText} = this.state;
    if (editing) {
      return (
        <form onSubmit={this.saveTodo} className="inlineEdit">
          <input ref="textInput" type="text" placeholder={todo.text} onBlur={this.saveTodo} />
        </form>
      );
    }
    return (
      <span onClick={this.enableEditingMode}>{todo.text}</span>
    );
  }
});
