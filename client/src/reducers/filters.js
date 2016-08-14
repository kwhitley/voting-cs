import ReduxRegistry from '../redux-registry.js';

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

export const filter = register.reducer;

export default register;
