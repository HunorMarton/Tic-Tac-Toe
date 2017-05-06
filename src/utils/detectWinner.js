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

function detectWinner(board) {
  return detectWinning(board, players.CROSS) ? players.CROSS : detectWinning(board, players.CIRCLE) ? players.CIRCLE : players.NOONE;
}

export default detectWinner;
