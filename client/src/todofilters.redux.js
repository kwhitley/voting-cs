// import ReduxRegistry from '../../node_modules/redux-registry/dist/redux-registry.js';
import ReduxRegistry from './redux-registry.js';

let register = new ReduxRegistry();

register
  .setInitialState('SHOW_ALL')
  .add({
    alias: 'setFilter',
    create: function(filter) {
      return {
        type: 'SET_FILTER',
        filter
      };
    },
    reduce: function(state, action) {
      return action.filter || state;
    }
  })
;

export default register;
