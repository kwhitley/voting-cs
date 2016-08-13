import {List, Map} from 'immutable';

export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    console.log('retrieved state', JSON.parse(serializedState));
    let state = JSON.parse(serializedState);
    if (state.todos) {
      state.todos = List(state.todos);
    }
    return state;
  } catch(err) {
    return undefined;
  }
}

export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch(err) {
    console.log('error saving state', key, state);
    return undefined;
  }
}
