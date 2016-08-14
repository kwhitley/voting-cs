import ReduxRegistry from '../redux-registry.js';
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
      if (!action.text) {
        return state;
      }
      // console.log('state.maxBy',state.maxBy(t => t.id));
      const maxIndex = state.size ? state.maxBy(t => t.id).id : 0;
      return state.push({
        id: maxIndex + 1,
        text: action.text,
        completed: false
      })
    }
  })
  .add({
    alias: 'editTodo',
    create: function(id, text) {
      return {
        type: 'EDIT_TODO',
        id,
        text
      }
    },
    reduce: function(state, action) {
      return state.map(todo => {
        if (action.id === todo.id) {
          todo.text = action.text;
        }

        return todo;
      });
    }
  })
  .add({
    alias: 'toggleTodo',
    create: function(id) {
      return {
        type: 'TOGGLE_TODO',
        id
      }
    },
    reduce: function(state, action) {
      return state.map(todo => {
        if (action.id === todo.id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });
    }
  })
  .add({
    alias: 'removeTodo',
    create: function(id) {
      return {
        type: 'REMOVE_TODO',
        id
      }
    },
    reduce: function(state, action) {
      return state.filterNot(todo => todo.id === action.id);
    }
  })
;

export const todos = register.reducer;

export default register;
