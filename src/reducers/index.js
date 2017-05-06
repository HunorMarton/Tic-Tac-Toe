// Set up your root reducer here...
import initialState from './initialState';
import boardReducer from './boardReducer';
import gameReducer from './gameReducer';

function rootReducer(state = initialState, action) {
  
   const board = boardReducer(state.board, action);
   const game = gameReducer(state.game, action, board);

   return {
     board,
     game
   };
}

export default rootReducer;
