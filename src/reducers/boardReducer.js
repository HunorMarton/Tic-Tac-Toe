import * as types from '../constants/actionTypes';
import initialState from './initialState';


export default function boardReducer(state = initialState.board, action) {
  switch (action.type) {
    case types.SET: {
      return Object.assign({}, state, {
        [action.block]: action.player
      });
    }
    default:
      return state;
    }
}