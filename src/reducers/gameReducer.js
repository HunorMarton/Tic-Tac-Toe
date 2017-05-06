import * as types from '../constants/actionTypes';
import initialState from './initialState';
import detectWinner from '../utils/detectWinner';
import detectGameOver from '../utils/detectGameOver';

export default function boardReducer(state = initialState.game, action, board) {
  switch (action.type) {
    case types.SET: {
      const gameOver = detectGameOver(board);
      const winner = detectWinner(board);
      return Object.assign({}, state, {
        gameOver,
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
