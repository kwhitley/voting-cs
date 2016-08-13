import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List, Map, fromJS} from 'immutable';
import TodoListHeader from './TodoListHeader';
import TodoListItems from './TodoListItems';
import AddTodo from './AddTodo';
import Filters from './Filters';
import todosRedux from '../todos.redux';
import todofiltersRedux from '../todofilters.redux';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

export const TodoList = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    // console.log('todolist state', this.props.todos.toJS());
    return (
      <div>

        <AddTodo {...this.props} />
        <Filters />
        <table className="todoList">
          <TodoListHeader {...this.props} />
          <TodoListItems {...this.props} />
        </table>

      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.filter),
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: () => {
      dispatch(todosRedux.create.addTodo(ownProps.text))
    }
  }
}

// console.log('creators', todosRedux.creators);

export const TodoListContainer = connect(
  mapStateToProps,
  Object.assign(
    {},
    todosRedux.creators,
    todofiltersRedux.creators
  )
)(TodoList);
