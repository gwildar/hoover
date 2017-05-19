import { combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';

import {
  HOOVER_HAS_MOVED,
  TOGGLE_DRAWER,
  FORM_SUBMISSION,
  REMOVE_DIRT,
} from '../actions/actions';

const initialGameState = {
  board: { height: 10, width: 10 },
  dirtNo: 2,
  dirt: [
    { x: 1, y: 3 },
    { x: 4, y: 4 },
  ],
  hoover: { x: 1, y: 1 }
};

const gameState = (state = initialGameState, action) => {
  switch (action.type) {
    case HOOVER_HAS_MOVED:
      return {
        ...state,
        hoover:  {
          x: state.hoover.x + action.x,
          y: state.hoover.y + action.y }
        };
    case REMOVE_DIRT:
    return {
      ...state,
      dirt: action.spots
    }
    case FORM_SUBMISSION:
      return action.data;
    default:
      return state;
  }
}

const drawer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
     return !state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  gameState,
  drawer,
  form: combineForms({
    game: initialGameState,
  }, 'form'),
});

export default rootReducer;
