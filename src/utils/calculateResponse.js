import * as players from '../constants/players';
function calculateResponse(board) {

  for(let i = 1; i <= 3; i++) {
    // Respond for horizontal threats
    if(
      board['b'+i+'1'] === players.CROSS &&
      board['b'+i+'2'] === players.CROSS &&
      board['b'+i+'3'] === players.NOONE
    ) return 'b'+i+'3';
    if(
      board['b'+i+'1'] === players.CROSS &&
      board['b'+i+'2'] === players.NOONE &&
      board['b'+i+'3'] === players.CROSS
    ) return 'b'+i+'2';
    if(
      board['b'+i+'1'] === players.NOONE &&
      board['b'+i+'2'] === players.CROSS &&
      board['b'+i+'3'] === players.CROSS
    ) return 'b'+i+'1';

    // Respond for vertical threats
    if(
      board['b1'+i] === players.CROSS &&
      board['b2'+i] === players.CROSS &&
      board['b3'+i] === players.NOONE
    ) return 'b3'+i;
    if(
      board['b1'+i] === players.CROSS &&
      board['b2'+i] === players.NOONE &&
      board['b3'+i] === players.CROSS
    ) return 'b2'+i;
    if(
      board['b1'+i] === players.NOONE &&
      board['b2'+i] === players.CROSS &&
      board['b3'+i] === players.CROSS
    ) return 'b1'+i;
  }

  // Respond to diagonal threats
  if(
    board['b11'] === players.CROSS &&
    board['b22'] === players.CROSS &&
    board['b33'] === players.NOONE
  ) return 'b33';
  if(
    board['b11'] === players.CROSS &&
    board['b22'] === players.NOONE &&
    board['b33'] === players.CROSS
  ) return 'b22';
  if(
    board['b11'] === players.NOONE &&
    board['b22'] === players.CROSS &&
    board['b33'] === players.CROSS
  ) return 'b11';

  if(
    board['b13'] === players.CROSS &&
    board['b22'] === players.CROSS &&
    board['b31'] === players.NOONE
  ) return 'b31';
  if(
    board['b13'] === players.CROSS &&
    board['b22'] === players.NOONE &&
    board['b31'] === players.CROSS
  ) return 'b22';
  if(
    board['b13'] === players.NOONE &&
    board['b22'] === players.CROSS &&
    board['b13'] === players.CROSS
  ) return 'b13';

  // Pick a random empty block
  for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++) {
      if(board['b'+i+j] === players.NOONE) return 'b'+i+j;
    }
  }
}

export default calculateResponse;
