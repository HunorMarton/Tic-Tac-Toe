import * as types from '../constants/actionTypes';
import initialState from './initialState';
import * as players from '../constants/players';
import detectWinning from '../utils/detectWinning';

export default function boardReducer(state = initialState.game, action, board) {
  switch (action.type) {
    case types.SET: {
      const currentPlayer = state.currentPlayer === players.CROSS ? players.CIRCLE : players.CROSS;
      const winner = detectWinning(board, players.CROSS) ? players.CROSS : detectWinning(board, players.CIRCLE) ? players.CIRCLE : players.NOONE;
      return Object.assign({}, state, {
        currentPlayer,
        winner
      });
    }
    case types.RESET: {
      return initialState.game;
    }
    default:
      return state;
    }
}
