// import ReduxRegistry from '../../node_modules/redux-registry/dist/redux-registry.js';
import ReduxRegistry from './redux-registry.js';
import Immutable from 'immutable';
const {Map, List, fromJS} = Immutable;

window.rr = ReduxRegistry;

let register = new ReduxRegistry;

let uniqueTodoIndex = 0;

register
  .setInitialState(List())
  .add({
    alias: 'addTodo',
    create: text => {
      return {
        type: 'ADD_TODO',
        text
      };
    },
    reduce: (state, action) => {
      // console.log('state.maxBy',state.maxBy(t => t.index));
      const maxIndex = state.size ? state.maxBy(t => t.index).index : 0;
      return state.push({
        index: maxIndex + 1,
        text: action.text,
        completed: false
      })
    }
  })
  .add({
    alias: 'toggleTodo',
    create: function(index) {
      return {
        type: 'TOGGLE_TODO',
        index: index
      }
    },
    reduce: function(state, action) {
      return state.map(todo => {
        if (action.index === todo.index) {
          todo.completed = !todo.completed;
        }

        return todo;
      });
    }
  })
  .add({
    alias: 'removeTodo',
    create: function(index) {
      return {
        type: 'REMOVE_TODO',
        index
      }
    },
    reduce: function(state, action) {
      return state.filterNot((todo, index) => index === action.index);
    }
  })
;

export default register;
