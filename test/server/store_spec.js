import {Map, fromJS} from 'immutable';
import {expect, should} from 'chai';

import makeStore from '../../server/src/store';

let shouldFunc = should();

describe('server:store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Trainspotting', '28 Days Later']
    });
    store.getState().should.equal(fromJS({
      entries: ['Trainspotting', '28 Days Later']
    }));
  });

});
