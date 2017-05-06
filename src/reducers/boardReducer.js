import * as types from '../constants/actionTypes';
import * as players from '../constants/players';
import initialState from './initialState';
import calculateResponse from '../utils/calculateResponse';

export default function boardReducer(state = initialState.board, action) {
  switch (action.type) {
    case types.SET: {
      if(action.player === players.CROSS) {
        return Object.assign({}, state, {
          [action.block]: action.player
        });
      }else{
        const position = calculateResponse(state);
        return Object.assign({}, state, {
          [position]: action.player
        });
      }
    }
    case types.RESET: {
      return initialState.board;
    }
    default:
      return state;
    }
}
