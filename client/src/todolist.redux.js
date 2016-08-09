import {Map, List} from 'immutable';

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

export const reducers = {
  // addTodo(state, text) {
  //   return state.update(
  //     'todos',
  //     todos => todos.push({ text: text, completed: false })
  //   );
  // }

  // toggleTodo(state, index) {
  //   return state.updateIn(
  //     ['todos', index],
  //     todo => todo.completed = !todo.completed
  //   );
  // }
};



class ReduxFactory {
  constructor(init = {}) {
    this.setInitialState();
    this.setDefs();
    this.setPrefix();

    Object.keys(init).forEach(key => {
      let setterName = 'set' + key[0].toUpperCase() + key.slice(1);
      let setter = this[setterName];
      if (!setter) {
        throw new ReferenceError(`function ${setterName}() not found in ReduxFactory`);
      }
      setter && setter.call(this, init[key]);
    });
    return this;
  }

  setInitialState(state = {}) {
    this.state = state;
    return this;
  }

  setDefs(defs = []) {
    this.defs = defs;
    return this;
  }

  setPrefix(prefix = '') {
    this.prefix = prefix;
    return this;
  }

  add(def) {
    this.defs.push(def);
    return this;
  }

  getNames() {
    return this.defs.map(def => def.name);
  }

  getCreators() {
    let creators = {};
    this.defs.forEach(def => creators[def.alias || def.name] = def.create);
    return creators;
  }

  getReducers() {
    let reducers = {};
    this.defs.forEach(def => reducers[def.alias || def.name] = def.reduce);
    return reducers;
  }

  getDef(name) {
    return this.defs.find(def => def.name === name || def.alias === name);
  }

  reduce(state, action) {
    return this.getDef(action.type).reduce()
  }
}

let RF = new ReduxFactory({
  prefix: 'todoapp',
  initialState: Map(),
  defs: [{
    name: 'ADD_TODO',
    reduce: function(state, action) {
      return state.update(
        'todos',
        todos => todos.push({ text: action.text, completed: false })
      );
    },
    create: function(text) {
      return {
        type: this.name,
        text: text
      }
    }
  }]
});

// RF.add({ name: 'TOGGLE_TODO', create: function(index) { return { type: this.name, index: index }}, reduce: function(state) { return state; }});

export function addTodo(text) {
  return {
    action: ADD_TODO,
    text: text,
    completed: false
  }
}

export function toggleTodo(index) {
  return {
    action: TOGGLE_TODO,
    index: index
  }
}

export default function reducer(state = Map(), action) {
  // switch (action) {
  //   case ADD_TODO: return reducers.addTodo(state, action.text);
  //   case TOGGLE_TODO: return reducers.toggleTodo(state, index);
  // }
  return state;
}
