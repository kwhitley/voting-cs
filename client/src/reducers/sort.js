import ReduxRegistry from '../redux-registry.js';
import {Map} from 'immutable';

let register = new ReduxRegistry();

register
  .setInitialState({
    by: 'id',
    ascending: true
  })
  .add({
    alias: 'setSortBy',
    create: function(by) {
      return {
        type: 'SET_SORT_BY',
        by
      };
    },
    reduce: function(state, action) {
      return Object.assign({}, state, { by: action.by });
    }
  })
  .add({
    alias: 'reverseSortDirection',
    create: function(direction) {
      return {
        type: 'REVERSE_SORT_DIRECTION'
      };
    },
    reduce: function(state) {
      return Object.assign({}, state, { ascending: !state.ascending});
    }
  })
;

export const sort = register.reducer;

export default register;
