import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List, Map, fromJS} from 'immutable';
import TodoListHeader from './TodoListHeader';
import TodoListItems from './TodoListItems';
import AddTodo from './AddTodo';
import Filters from './Filters';
import SortOptions from './SortOptions';
import todos from '../reducers/todos';
import filters from '../reducers/filters';

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

const sortTodos = (todos, sortby, ascending) => {
  todos = todos.sortBy(todo => todo[sortby]);
  if (!ascending) {
    return todos.reverse();
  }
  return todos;
}

export const TodoList = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div>
        <AddTodo {...this.props} />
        <Filters />
        <SortOptions />
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
    todos: sortTodos(
      getVisibleTodos(state.todos, state.filter),
      state.sort.by,
      state.sort.ascending
    )
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: () => {
      dispatch(todos.create.addTodo(ownProps.text))
    }
  }
}

// console.log('creators', todos.creators);

export const TodoListContainer = connect(
  mapStateToProps,
  Object.assign(
    {},
    todos.creators,
    filters.creators
  )
)(TodoList);
