import * as types from '../constants/actionTypes';
import initialState from './initialState';
import * as players from '../constants/players';

function detectWinning(board, player) {
  // Vertical line
  if(board.b11 === player && board.b12 === player && board.b13 === player) return true;
  if(board.b21 === player && board.b22 === player && board.b23 === player) return true;
  if(board.b31 === player && board.b32 === player && board.b33 === player) return true;

  // Horizontal line
  if(board.b11 === player && board.b21 === player && board.b31 === player) return true;
  if(board.b12 === player && board.b22 === player && board.b32 === player) return true;
  if(board.b13 === player && board.b23 === player && board.b33 === player) return true;

  // Diagonal line
  if(board.b11 === player && board.b22 === player && board.b33 === player) return true;
  if(board.b13 === player && board.b22 === player && board.b31 === player) return true;

  return false;
}

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
