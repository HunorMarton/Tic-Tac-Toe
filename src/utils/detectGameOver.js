import * as players from '../constants/players';
import detectWinner from './detectWinner';

function detectGameOver(board) {
  // Someone won
  if(detectWinner(board) !== players.NOONE) return true;

  // There is at least one block which is not occupied
  for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++) {
      if(board['b'+i+j] === players.NOONE) return false;
    }
  }

  // Nobody won, but there are no more free blocks left
  return true;
}

export default detectGameOver;
