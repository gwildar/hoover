
// For expedience I've only built tests for the moving the hoover, obviously a real app would test – action creators, reducers, and components that contain logic
//

import { move, moveHoover } from '../actions/actions';
import {
  HOOVER_HAS_MOVED,
  REMOVE_DIRT,
} from '../actions/actions';

import expect from 'expect';

const baseState = {
  gameState:
  {
    board: { height: 10, width: 10 },
    dirtNo: 2,
    dirt: [
      { x: 1, y: 3 },
      { x: 4, y: 4 },
    ],
    hoover: { x: 1, y: 1 }
  }
};

describe('action tests', () => {

  it('should pass the move to the reducer', () => {
    const expectedActions = {
      type: HOOVER_HAS_MOVED,
      x: 1,
      y: 0
    }
    expect(move(1, 0)).toEqual(expectedActions);
  })

  it('should not move hoover horizontally if less than 1', () => {
    const getState = () => (baseState);
    const dispatch = expect.createSpy();
    moveHoover(-1, 0)(dispatch, getState);
    expect(dispatch).toNotHaveBeenCalled();
  })

  it('should not move hoover horizontally if greater than 10', () => {
    const getState = () => (baseState);
    const dispatch = expect.createSpy();
    moveHoover(10, 0)(dispatch, getState);
    expect(dispatch).toNotHaveBeenCalled();
  })

  it('should not move hoover vertically if less than 1', () => {
    const getState = () => (baseState);
    const dispatch = expect.createSpy();
    moveHoover(0, -1)(dispatch, getState);
    expect(dispatch).toNotHaveBeenCalled();
  })

  it('should not move hoover vertically if greater than 10', () => {
    const getState = () => (baseState);
    const dispatch = expect.createSpy();
    moveHoover(0, 10)(dispatch, getState);
    expect(dispatch).toNotHaveBeenCalled();
  })

  it('should move hoover vertically if the move is inbounds', () => {
    const getState = () => (baseState);
    const dispatch = expect.createSpy();
    moveHoover(0, 1)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({type: HOOVER_HAS_MOVED, x: 0, y: 1})
  })

  it('should move hoover vertically if the move is inbounds', () => {
    const getState = () => (baseState);
    const dispatch = expect.createSpy();
    moveHoover(1, 0)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({type: HOOVER_HAS_MOVED, x: 1, y: 0})
  })

  it('should remove dirt when it matches dirt spot', () => {
    const getState = () => (baseState);
    const dispatch = expect.createSpy();
    moveHoover(0, 2)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({
      type: REMOVE_DIRT,
      spots: [
        {
          x: 4,
          y: 4
        }
      ]
    })
  })

})
