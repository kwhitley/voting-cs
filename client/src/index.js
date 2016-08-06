require('./styles/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import TodoList from './components/TodoList';

// render router
ReactDOM.render(
  <TodoList />,
  document.getElementById('app')
);
