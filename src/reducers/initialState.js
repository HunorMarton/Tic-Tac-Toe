import * as players from '../constants/players';

export default {
  game: {
    gameOver: false,
    winner: players.NOONE
  },
  board: {
    b11: players.NOONE,
    b12: players.NOONE,
    b13: players.NOONE,
    b21: players.NOONE,
    b22: players.NOONE,
    b23: players.NOONE,
    b31: players.NOONE,
    b32: players.NOONE,
    b33: players.NOONE
  }
};
