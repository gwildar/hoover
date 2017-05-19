
// For expedience I've only built one test, obviously a real app would test; action creators, reducers, and components that contain logic

import { move } from '../actions/actions';
import {
  HOOVER_HAS_MOVED,
} from '../actions/actions';

import expect from 'expect'


describe('action tests', () => {

  it('should move hoover one place', () => {

    const expectedActions = {
      type: HOOVER_HAS_MOVED,
      x: 1,
      y: 0
    }
    expect(move(1, 0)).toEqual(expectedActions)
  })
})
