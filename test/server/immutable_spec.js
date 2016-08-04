import {should, expect} from 'chai';
import {List, Map} from 'immutable';

// initialize should()
let shouldFunc = should()

// tests
describe('server:immutability', () => {

  // basic number/immutability
  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      nextState.should.equal(43);
      state.should.equal(42);
    });
  });

  // Immutable Lists
  describe('a List', () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('Trainspotting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ));
      expect(state).to.equal(List.of(
        'Trainspotting',
        '28 Days Later'
      ));
    });

  });

  // ES6 Simulated Immutable Lists
  describe('a simulated List', () => {

    function addMovie(currentState, movie) {
      return [...currentState, movie];
    }

    it('is immutable', () => {
      let state = ['Trainspotting', '28 Days Later'];
      let nextState = addMovie(state, 'Sunshine');

      nextState.should.eql([
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ]);
      state.should.eql([
        'Trainspotting',
        '28 Days Later'
      ]);
    });

  });

  // Immutable Maps
  describe('a Map', () => {

    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });

  });

  // Simulated Immutable Maps
  describe('a simulated Map', () => {

    function addMovie(currentState, movie) {
      return Object.assign({}, currentState, { movies: [...currentState.movies, movie] })
    }

    it('is immutable', () => {
      let state = {
        movies: ['Trainspotting', '28 Days Later']
      };
      let nextState = addMovie(state, 'Sunshine');

      nextState.should.eql({
        movies: [
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        ]
      });
      state.should.eql({
        movies: [
          'Trainspotting',
          '28 Days Later'
        ]
      });
    });

  });

});
