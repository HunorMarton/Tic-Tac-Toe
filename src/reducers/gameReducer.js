import * as types from '../constants/actionTypes';
import initialState from './initialState';
import * as players from '../constants/players';

export default function boardReducer(state = initialState.game, action) {
  switch (action.type) {
    case types.SET: {
      return Object.assign({}, state, {
        currentPlayer: state.currentPlayer === players.CROSS ? players.CIRCLE : players.CROSS
      });
    }
    default:
      return state;
    }
}
