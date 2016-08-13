require('./styles/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {TodoListContainer} from './components/TodoList';
import todosRedux from './todos.redux.js';
import todofiltersRedux from './todofilters.redux.js';
import {List, Map, fromJS} from 'immutable';
import {loadState, saveState} from './localStorage';

let reducers = {
  todos: todosRedux.reducer,
  filter: todofiltersRedux.reducer
};

const localStorageKey = 'todolist:state';
const persistedState = loadState(localStorageKey);

const store = createStore(combineReducers(reducers), persistedState);

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
