require('./styles/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {TodoListContainer} from './components/TodoList';
import {todos} from './reducers/todos.js';
import {filter} from './reducers/filters.js';
import {sort} from './reducers/sort.js';
import {List, Map, fromJS} from 'immutable';
import {loadState, saveState} from './localStorage';

let reducers = {
  todos, filter, sort
};

const localStorageKey = 'todolist:state';
const persistedState = loadState(localStorageKey);

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState().todos.toJS())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}


const store = createStore(
  combineReducers(reducers),
  persistedState,
  applyMiddleware(logger)
);

store.subscribe(() => {
  console.log('state after dispatch', store.getState());
  saveState(localStorageKey, store.getState());
});

// render router
ReactDOM.render(
  <Provider store={store}>
    <TodoListContainer />
  </Provider>
  ,
  document.getElementById('app')
);
