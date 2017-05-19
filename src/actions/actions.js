import { inRange } from 'lodash';
import { actions } from 'react-redux-form';

// ACTION TYPES
export const HOOVER_HAS_MOVED = 'HOOVER_HAS_MOVED';
export const BOARD_HAS_CHANGED = 'BOARD_HAS_CHANGED';
export const REMOVE_DIRT = 'REMOVE_DIRT';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const FORM_SUBMISSION = 'FORM_SUBMISSION';

// ACTIONS
export const move = (x,y) => {
  return {
    type: HOOVER_HAS_MOVED,
    x: x,
    y: y,
  }
}

export const toggleDrawer = () => {
  return {
    type: TOGGLE_DRAWER,
  }
}

export const updateForm = data => {
  return {
    type: FORM_SUBMISSION,
    data: data,
  }
}

export const removeDirt = (spots) => {
  return {
    type: REMOVE_DIRT,
    spots: spots,
  }
}

export const formSubmission = data => {
  return (dispatch) => {
    dispatch(updateForm(data));
    dispatch(toggleDrawer());
  }
}

export const moveHoover = (x, y) => {
  return (dispatch, getState) => {
    const maxWidth = getState().gameState.board.width;
    const maxHeight = getState().gameState.board.height;
    const newX = getState().gameState.hoover.x + x;
    const newY = getState().gameState.hoover.y + y;
    const Dirt = getState().gameState.dirt;
    const newDirt = Dirt.filter(dirt => dirt.x !== newX || dirt.y !== newY);

    // if in range dispatch move
    if(inRange(newX, 1, maxWidth + 1) && inRange(newY, 1, maxHeight + 1)) {
        dispatch(move(x, y));
    };

    // check move against current dirt spot locations
    if(newDirt.length !== Dirt.length) {
      dispatch(removeDirt(newDirt));
    }

  };
}

export const changeSpots = event => {
  return(dispatch, getState) => {
    const curDirt = getState().form.game.dirt;
    if(curDirt.length < event) {
      dispatch(actions.push(`form.game.dirt`, {x: 1, y: 1}))
    }
    if(curDirt.length > event) {
      dispatch(actions.remove(`form.game.dirt`, curDirt.length - 1));
    }
  }
}
